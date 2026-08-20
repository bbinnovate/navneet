import { NextRequest, NextResponse } from 'next/server';
import { db, FieldValue } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email || '')) {
    return NextResponse.json(
      { error: 'Please provide your name and a valid email address.' },
      { status: 400 }
    );
  }

  const ref = db.collection('contactEnquiries').doc();
  await ref.set({
    ...body,
    id: `ENQ-${ref.id.slice(0, 8).toUpperCase()}`,
    status: 'new',
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });

  return NextResponse.json({ ok: true, id: ref.id }, { status: 201 });
}
