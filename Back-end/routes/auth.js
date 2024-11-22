const express = require('express');
const {registerUser, loginUser,googleSignUp} = require('../controllers/userController');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google', async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    // Add your user registration or login logic here
    res.status(200).json({ token: process.env.JWT_SECRET });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// register route

router.post('/signup',registerUser);




// login route

router.post('/login',loginUser);

router.post('/google', googleSignUp);


module.exports = router;