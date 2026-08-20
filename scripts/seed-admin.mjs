import admin from 'firebase-admin';

// Make sure to run this with `node --env-file=.env scripts/seed-admin.js`

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const adminDb = admin.firestore();
const adminAuth = admin.auth();

async function seedAdmin() {
  const email = 'aryanyoo@gmail.com';
  const password = '123456';

  try {
    let userRecord;
    try {
      userRecord = await adminAuth.getUserByEmail(email);
      console.log('User already exists:', userRecord.uid);
    } catch (e) {
      if (e.code === 'auth/user-not-found') {
        userRecord = await adminAuth.createUser({
          email,
          password,
          displayName: 'Super Admin',
          emailVerified: true,
        });
        console.log('Created new user:', userRecord.uid);
      } else {
        throw e;
      }
    }

    // Set custom claims
    await adminAuth.setCustomUserClaims(userRecord.uid, { admin: true });
    console.log('Set custom claims (admin: true) for user:', userRecord.uid);

    // Save to Firestore
    await adminDb.collection('users').doc(userRecord.uid).set({
      uid: userRecord.uid,
      name: 'Super Admin',
      email: email,
      role: 'admin',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    console.log('Admin user seeded in Firestore successfully.');
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
}

seedAdmin();
