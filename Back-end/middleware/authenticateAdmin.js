const jwt = require('jsonwebtoken');
const { User } = require('../models/user'); // Assuming you have a User model

// Middleware to authenticate and check for admin role
const authenticateAdmin = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Token from Authorization header

  if (!token) {
    return res.status(403).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode JWT token
    const user = await User.findByPk(decoded.id); // Assuming the token contains the user ID

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user has admin role
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. You are not an admin.' });
    }

    // Attach user info to request object for further use
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Failed to authenticate token', details: error.message });
  }
};

module.exports = authenticateAdmin;
