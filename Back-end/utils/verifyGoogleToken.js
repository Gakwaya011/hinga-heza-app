const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    return { email, name };
  } catch (error) {
    console.error('Error verifying Google token:', error); // Log full error for debugging
    throw new Error('Invalid Google token');
  }
}

module.exports = { verifyGoogleToken };
