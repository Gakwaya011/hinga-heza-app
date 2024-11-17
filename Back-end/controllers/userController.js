const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyGoogleToken } = require('../routes/auth');

const registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error registering user' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'User not found' });
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Login error' });
  }
};

async function googleSignUp(req, res) {
  const { token } = req.body;

  try {
    // Verify the Google token
    const { email, name } = await verifyGoogleToken(token);

    // Check if the user already exists in your database
    let user = await User.findOne({ where: { email } });

    if (!user) {
      // If user doesn't exist, create a new user
      user = await User.create({ email, name });
    }

    

    res.status(200).json({ message: 'User authenticated successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { registerUser, loginUser, googleSignUp };
