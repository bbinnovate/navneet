const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const adminAuth = getAuth();

async function updateExistingAdmin() {
  const email = 'aryan@bombayblokes.com';
  const newPassword = '123456';
  
  try {
    const userRecord = await adminAuth.getUserByEmail(email);
    console.log('Found existing user:', userRecord.uid);
    
    // Force the password to 123456 so they can log in via email/password
    await adminAuth.updateUser(userRecord.uid, {
      password: newPassword,
    });
    console.log('Successfully updated password to 123456.');

    // Add the custom claim which our frontend layout requires to allow entry
    await adminAuth.setCustomUserClaims(userRecord.uid, { admin: true });
    console.log('Successfully added backend custom claim { admin: true }.');
    
  } catch (error) {
    console.error('Error updating existing admin user:', error);
  }
}

updateExistingAdmin();
