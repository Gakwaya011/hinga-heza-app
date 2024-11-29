const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyGoogleToken } = require('../utils/verifyGoogleToken'); // Move this utility to a dedicated file

// Register a New User
const registerUser = async (req, res) => {
  const {username, email, password, role } = req.body;

  try {
    // Validate inputs
    if (!email || !password || password.length < 6) {
      return res.status(400).json({ error: 'Email and password are required, and password must be at least 6 characters long.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error("Registration Error:", error); // Log the full error object
    res.status(500).json({ error: 'Error registering user' });
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

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error("Login Error:", error); // Log the full error object
    res.status(500).json({ error: 'Login error' });
  }
};

// Google Sign-Up
const googleSignUp = async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ error: 'Google token is required' });
    }

    // Verify the Google token
    const { email, name } = await verifyGoogleToken(token);

    // Check if the user already exists
    let user = await User.findOne({ where: { email } });

    if (!user) {
      // Create a new user if they don't exist
      user = await User.create({ email, name });
    }

    res.status(200).json({ message: 'User authenticated successfully', user });
  } catch (error) {
    console.error("Google Sign-Up Error:", error); // Log the full error object
    res.status(400).json({ error: 'Google sign-up failed: ' + error.message });
  }
};

module.exports = { registerUser, loginUser, googleSignUp };
