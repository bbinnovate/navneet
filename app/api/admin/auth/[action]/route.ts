import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, db, FieldValue } from '@/lib/firebase/admin';
import { clearSession, requireAdmin, sessionCookie } from '@/lib/firebase/server';
import { normalizeRole } from '@/lib/constants';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ action: string }> }
) {
  const { action } = await params;
  const body = await request.json().catch(() => ({}));

  try {
    if (action === 'session') {
      const decoded = await adminAuth.verifyIdToken(body.idToken);
      if (!decoded.admin) {
        return NextResponse.json(
          { error: 'This account does not have administrator access.' },
          { status: 403 }
        );
      }
      const res = NextResponse.json({ ok: true });
      res.cookies.set(await sessionCookie(body.idToken));
      return res;
    }

    if (action === 'logout') {
      const res = NextResponse.json({ ok: true });
      res.cookies.set(clearSession);
      return res;
    }

    if (action === 'create-user') {
      const admin = await requireAdmin();
      if (!body.email || !body.password) {
        return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
      }
      if (body.password.length < 10) {
        return NextResponse.json({ error: 'Password must be at least 10 characters.' }, { status: 400 });
      }

      const role = normalizeRole(body.role || 'user');
      const user = await adminAuth.createUser({
        email: body.email,
        password: body.password,
        displayName: body.name || undefined,
      });

      if (role === 'admin') {
        await adminAuth.setCustomUserClaims(user.uid, { admin: true });
      }

      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        name: body.name || '',
        email: user.email,
        role,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        createdBy: admin.uid,
      });

      return NextResponse.json({ uid: user.uid }, { status: 201 });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Request failed';
    const status = message === 'UNAUTHORIZED' || message === 'FORBIDDEN' ? 401 : 400;
    return NextResponse.json(
      { error: status === 401 ? 'Unauthorized' : 'Request could not be completed.' },
      { status }
    );
  }
}
