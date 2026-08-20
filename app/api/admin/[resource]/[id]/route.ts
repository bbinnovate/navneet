import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, db, FieldValue } from '@/lib/firebase/admin';
import { requireAdmin } from '@/lib/firebase/server';
import { COLLECTIONS, normalizeRole, normalizeStatus } from '@/lib/constants';
import { sanitizeHtml } from '@/lib/sanitize';
import { serializeDoc } from '@/lib/firebase/content';
import { Timestamp } from 'firebase-admin/firestore';

function parseDate(value: unknown): Timestamp | null {
  if (!value) return null;
  const d = new Date(String(value));
  return isNaN(d.getTime()) ? null : Timestamp.fromDate(d);
}

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ resource: string; id: string }> }
) {
  try {
    await requireAdmin();
    const { resource, id } = await params;
    const collection = COLLECTIONS[resource];
    if (!collection) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const doc = await db.collection(collection).doc(id).get();
    if (!doc.exists) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json(serializeDoc({ id: doc.id, ...doc.data() }));
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string; id: string }> }
) {
  try {
    const admin = await requireAdmin();
    const { resource, id } = await params;
    const body = await request.json();
    const collection = COLLECTIONS[resource];
    if (!collection) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (resource === 'users' && body.role) {
      const role = normalizeRole(body.role);
      await adminAuth.setCustomUserClaims(id, { admin: role === 'admin' });
      body.role = role;
    }

    const updates: Record<string, unknown> = {
      ...body,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: admin.uid,
    };

    if (body.status) {
      updates.status = normalizeStatus(body.status);
      if (updates.status === 'published') {
        updates.publishedAt = FieldValue.serverTimestamp();
      }
    }

    if (body.content) updates.content = sanitizeHtml(body.content);
    if (body.scheduledAt !== undefined) {
      updates.scheduledAt = body.scheduledAt ? parseDate(body.scheduledAt) : null;
    }

    await db.collection(collection).doc(id).update(updates);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ resource: string; id: string }> }
) {
  try {
    await requireAdmin();
    const { resource, id } = await params;
    const collection = COLLECTIONS[resource];
    if (!collection) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (resource === 'users') await adminAuth.deleteUser(id);
    await db.collection(collection).doc(id).delete();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
