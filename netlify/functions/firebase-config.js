// netlify/functions/firebase-config.js
// This function safely serves Firebase config from environment variables.
// The config is NOT embedded in the frontend bundle — it's fetched at runtime
// from this server-side function, keeping secrets out of your public HTML/JS.

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

  // Validate all required env vars are set
  const missing = Object.entries(config)
    .filter(([, v]) => !v)
    .map(([k]) => k);

  if (missing.length > 0) {
    console.error('Missing Firebase env vars:', missing);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server misconfiguration: missing env vars' }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      // Only allow your own origin to fetch this
      'Access-Control-Allow-Origin': process.env.SITE_URL || '*',
      // Cache for 5 minutes — config rarely changes
      'Cache-Control': 'private, max-age=300',
    },
    body: JSON.stringify(config),
  };
};
