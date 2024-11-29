const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyGoogleToken } = require('../utils/verifyGoogleToken');

// Register a New User
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Validate inputs
    if (!username || !email || !password || password.length < 6) {
      return res.status(400).json({
        error: 'Username, email, and password are required. Password must be at least 6 characters long.',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || 'user', // Default role is 'user' if not provided
    });

    res.status(201).json({
      message: 'User registered successfully!',
      user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    const errorMessage = error?.errors?.[0]?.message || 'Error registering user';
    res.status(500).json({ error: errorMessage });
  }
};

// Log in User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'default_secret', // Fallback if JWT_SECRET is not set
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Logged in successfully',
      token,
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: 'Login error' });
  }
};

// Google Sign-Up
const googleSignUp = async (req, res) => {
  const { token } = req.body;

  try {
    // Validate the Google token
    if (!token) {
      return res.status(400).json({ error: 'Google token is required' });
    }

    // Verify the Google token and extract user info
    const { email, name } = await verifyGoogleToken(token);

    // Check if the user already exists
    let user = await User.findOne({ where: { email } });

    // Create a new user if they don't exist
    if (!user) {
      user = await User.create({
        username: name,
        email,
        password: null, // Google-authenticated users don't need a password
        role: 'user', // Default role for Google users
      });
    }

    res.status(200).json({
      message: 'User authenticated successfully',
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Google Sign-Up Error:", error);
    res.status(400).json({ error: 'Google sign-up failed: ' + error.message });
  }
};

module.exports = { registerUser, loginUser, googleSignUp };
