import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';

export async function POST(request: Request) {
  try {
    const { userId, role } = await request.json();
    
    if (!userId || !role) {
      return NextResponse.json({ error: 'Missing userId or role' }, { status: 400 });
    }

    const isAdmin = role === 'admin';

    // 1. Set Custom Claims in Firebase Auth
    await adminAuth.setCustomUserClaims(userId, { admin: isAdmin });

    // 2. Update role field in Firestore
    await adminDb.collection('users').doc(userId).update({
      role: role
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error promoting user:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
