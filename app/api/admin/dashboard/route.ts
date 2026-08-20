import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase/admin';
import { requireAdmin } from '@/lib/firebase/server';

async function countByStatus(collection: string, status: string, from?: Date) {
  const snap = await db.collection(collection).where('status', '==', status).get();
  if (!from) return snap.size;
  return snap.docs.filter((d) => {
    const created = d.data().createdAt?.toDate?.();
    return created && created >= from;
  }).length;
}

async function countAll(collection: string, from?: Date) {
  const snap = await db.collection(collection).get();
  if (!from) return snap.size;
  return snap.docs.filter((d) => {
    const created = d.data().createdAt?.toDate?.();
    return created && created >= from;
  }).length;
}

async function countAdmins() {
  const snap = await db.collection('users').where('role', '==', 'admin').count().get();
  return snap.data().count;
}

async function timeline(collection: string, from: Date, to: Date) {
  const snap = await db.collection(collection).limit(500).get();
  const buckets: Record<string, number> = {};
  for (const doc of snap.docs) {
    const createdAt = doc.data().createdAt?.toDate?.();
    if (!createdAt || createdAt < from || createdAt > to) continue;
    const key = createdAt.toISOString().slice(0, 10);
    buckets[key] = (buckets[key] || 0) + 1;
  }
  return buckets;
}

export async function GET(request: NextRequest) {
  try {
    await requireAdmin();

    const fromParam = request.nextUrl.searchParams.get('from');
    const toParam = request.nextUrl.searchParams.get('to');
    const from = fromParam ? new Date(fromParam) : undefined;
    const to = toParam ? new Date(toParam) : new Date();

    const contentTypes = ['news', 'articles', 'blogs', 'careers'] as const;
    const totals: Record<string, number> = {};
    const published: Record<string, number> = {};
    const scheduled: Record<string, number> = {};

    for (const type of contentTypes) {
      totals[type] = await countAll(type, from);
      published[type] = await countByStatus(type, 'published', from);
      scheduled[type] = await countByStatus(type, 'scheduled', from);
    }

    const applications = await countAll('careerApplications', from);
    const enquiries = await countAll('contactEnquiries', from);
    const users = await countAll('users', from);
    const admins = await countAdmins();

    const chartFrom = from || new Date(Date.now() - 30 * 86400000);
    const charts = {
      news: await timeline('news', chartFrom, to),
      articles: await timeline('articles', chartFrom, to),
      blogs: await timeline('blogs', chartFrom, to),
      applications: await timeline('careerApplications', chartFrom, to),
      enquiries: await timeline('contactEnquiries', chartFrom, to),
      users: await timeline('users', chartFrom, to),
    };

    return NextResponse.json({
      totals: {
        news: totals.news,
        articles: totals.articles,
        blogs: totals.blogs,
        careers: totals.careers,
        applications,
        enquiries,
        users,
        admins,
      },
      published,
      scheduled,
      charts,
      period: { from: from?.toISOString() || null, to: to.toISOString() },
    });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
