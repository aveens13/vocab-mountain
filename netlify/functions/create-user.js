// netlify/functions/create-user.js
// Creates a Firebase Auth user server-side using Firebase Admin SDK.
// This is needed so the admin can create users without being signed out.
// Protected by verifying the caller's Firebase ID token.

const admin = require('firebase-admin');

// Initialize Admin SDK once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      // Netlify env vars don't support literal newlines in private keys,
      // so we store the key with \n replaced by the string "\\n"
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
        ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n')
        : undefined,
    }),
  });
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  // Verify the caller is an authenticated admin
  const authHeader = event.headers.authorization || '';
  const idToken = authHeader.replace('Bearer ', '');
  if (!idToken) return { statusCode: 401, body: JSON.stringify({ error: 'Missing auth token' }) };

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    // Check admin claim or Firestore isAdmin flag
    // For simplicity we check the Firestore flag via Admin SDK
    const db = admin.firestore();
    const userDoc = await db.collection('users').doc(decoded.uid).get();
    if (!userDoc.exists || !userDoc.data().isAdmin) {
      return { statusCode: 403, body: JSON.stringify({ error: 'Not authorized' }) };
    }

    const { email, password } = JSON.parse(event.body);
    if (!email || !password) return { statusCode: 400, body: JSON.stringify({ error: 'email and password required' }) };

    const newUser = await admin.auth().createUser({ email, password });
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid: newUser.uid, email: newUser.email }),
    };
  } catch (err) {
    console.error('create-user error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Internal error' }),
    };
  }
};
