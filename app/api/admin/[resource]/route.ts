import { NextRequest, NextResponse } from 'next/server';
import { db, FieldValue } from '@/lib/firebase/admin';
import { requireAdmin } from '@/lib/firebase/server';
import { COLLECTIONS, CONTENT_TYPES, normalizeStatus } from '@/lib/constants';
import { sanitizeHtml } from '@/lib/sanitize';
import { serializeDoc } from '@/lib/firebase/content';
import { Timestamp } from 'firebase-admin/firestore';

const CONTENT = [...CONTENT_TYPES];

function parseDate(value: unknown): Timestamp | null {
  if (!value) return null;
  const d = new Date(String(value));
  return isNaN(d.getTime()) ? null : Timestamp.fromDate(d);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string }> }
) {
  try {
    await requireAdmin();
    const { resource } = await params;
    const collection = COLLECTIONS[resource];
    if (!collection) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const search = (request.nextUrl.searchParams.get('search') || '').toLowerCase();
    const status = request.nextUrl.searchParams.get('status');
    const category = request.nextUrl.searchParams.get('category');
    const page = Math.max(1, Number(request.nextUrl.searchParams.get('page') || 1));
    const limit = Math.min(50, Math.max(1, Number(request.nextUrl.searchParams.get('limit') || 20)));

    let query: FirebaseFirestore.Query = db.collection(collection).orderBy('createdAt', 'desc');

    if (status) query = query.where('status', '==', normalizeStatus(status));
    if (category && CONTENT.includes(resource as typeof CONTENT[number])) {
      query = query.where('category', '==', category);
    }

    const snap = await query.limit(200).get();
    let rows = snap.docs.map((d) => serializeDoc({ id: d.id, ...d.data() }));

    if (search) {
      rows = rows.filter((r) => JSON.stringify(r).toLowerCase().includes(search));
    }

    const total = rows.length;
    const start = (page - 1) * limit;
    rows = rows.slice(start, start + limit);

    return NextResponse.json({ rows, total, page, limit });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string }> }
) {
  try {
    const admin = await requireAdmin();
    const { resource } = await params;
    const collection = COLLECTIONS[resource];
    const body = await request.json();

    if (!collection) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (['users', 'applications', 'enquiries'].includes(resource)) {
      return NextResponse.json({ error: 'Use dedicated endpoints for this resource.' }, { status: 400 });
    }

    if (!body.name && !body.title) {
      return NextResponse.json({ error: 'A title or name is required.' }, { status: 400 });
    }
    if (CONTENT.includes(resource as typeof CONTENT[number]) && !body.slug) {
      return NextResponse.json({ error: 'A slug is required.' }, { status: 400 });
    }

    const status = normalizeStatus(body.status || 'draft');
    const scheduledAt = parseDate(body.scheduledAt);
    const data: Record<string, unknown> = {
      ...body,
      status,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      createdBy: admin.uid,
      updatedBy: admin.uid,
    };

    if (body.content) data.content = sanitizeHtml(body.content);
    if (scheduledAt) data.scheduledAt = scheduledAt;
    if (status === 'published') data.publishedAt = FieldValue.serverTimestamp();

    const ref = db.collection(collection).doc();
    await ref.set({ ...data, id: ref.id });

    return NextResponse.json({ id: ref.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
