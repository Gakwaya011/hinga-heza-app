// src/middleware/authmiddleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authenticateAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.status(403).send({ error: 'Admin privileges required' });
        }

        req.user = decoded; // Attach decoded user data to the request object
        next(); // Allow the request to proceed
    } catch (error) {
        return res.status(401).send({ error: 'Invalid or expired token' });
    }
};

module.exports = { authenticateAdmin };
