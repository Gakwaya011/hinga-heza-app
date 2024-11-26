// controllers/authController.js

const jwt = require('jsonwebtoken');
const User = require('./models/User');  // Assuming you have a User model

// Login User and generate JWT with role
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the password is correct (you should hash passwords)
        const isValidPassword = (user.password === password);  // Simplified for example purposes
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token with the user’s role (e.g., 'admin' or 'user')
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },  // role is included
            process.env.JWT_SECRET,
            { expiresIn: '1h' }  // Token expiration
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};
