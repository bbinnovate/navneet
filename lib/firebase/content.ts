import 'server-only';
import { db } from './admin';
import { Timestamp } from 'firebase-admin/firestore';

export type ContentItem = {
  id: string;
  title?: string;
  name?: string;
  slug?: string;
  category?: string;
  featuredImage?: string;
  shortDescription?: string;
  content?: string;
  author?: string;
  status?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  publishedAt?: Timestamp | string;
  scheduledAt?: Timestamp | string;
  createdAt?: Timestamp | string;
  updatedAt?: Timestamp | string;
  department?: string;
  location?: string;
  employmentType?: string;
  experience?: string;
  salary?: string;
};

function serializeTimestamp(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === 'string') return value;
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (typeof value === 'object' && value !== null && 'toDate' in value) {
    return (value as Timestamp).toDate().toISOString();
  }
  return undefined;
}

export function serializeDoc<T extends Record<string, unknown>>(data: T & { id: string }) {
  const result: Record<string, unknown> = { ...data };
  for (const key of ['createdAt', 'updatedAt', 'publishedAt', 'scheduledAt'] as const) {
    if (key in result) result[key] = serializeTimestamp(result[key]);
  }
  return result;
}

export async function getPublishedContent(type: string, slug?: string) {
  if (slug) {
    const snap = await db.collection(type)
      .where('status', '==', 'published')
      .where('slug', '==', slug)
      .limit(1)
      .get();
    if (snap.empty) return null;
    const doc = snap.docs[0];
    return serializeDoc({ id: doc.id, ...doc.data() } as ContentItem & { id: string });
  }

  const snap = await db.collection(type).where('status', '==', 'published').limit(100).get();
  const rows = snap.docs
    .map((d) => serializeDoc({ id: d.id, ...d.data() } as ContentItem & { id: string }))
    .sort((a, b) => {
      const da = a.publishedAt || a.createdAt || '';
      const db_ = b.publishedAt || b.createdAt || '';
      return String(db_).localeCompare(String(da));
    });
  return rows;
}

export async function publishScheduledContent() {
  const collections = ['news', 'articles', 'blogs', 'careers'];
  const now = Timestamp.now();
  let published = 0;

  for (const collection of collections) {
    const snap = await db.collection(collection)
      .where('status', '==', 'scheduled')
      .where('scheduledAt', '<=', now)
      .get();

    for (const doc of snap.docs) {
      await doc.ref.update({
        status: 'published',
        publishedAt: now,
        updatedAt: now,
      });
      published++;
    }
  }
  return published;
}
