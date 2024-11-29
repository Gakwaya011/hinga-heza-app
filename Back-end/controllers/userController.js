const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { verifyGoogleToken } = require("../utils/verifyGoogleToken");

// Register a New User
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Username, email, and password are required." });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user", // Defaults to 'user'
    });

    res.status(201).json({
      message: "User registered successfully!",
      user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: error?.errors?.[0]?.message || "Error registering user" });
  }
};

// Log in User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Logged in successfully",
      token,
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Login error: " + error.message });
  }
};

// Google Sign-Up
const googleSignUp = async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ error: "Google token is required." });
    }

    const { email, name } = await verifyGoogleToken(token);

    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({
        username: name,
        email,
        password: null,
        role: "user",
      });
    }

    const jwtToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "User authenticated successfully.",
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
      token: jwtToken,
    });
  } catch (error) {
    console.error("Google Sign-Up Error:", error);
    res.status(400).json({ error: "Google sign-up failed: " + error.message });
  }
};

module.exports = { registerUser, loginUser, googleSignUp };
