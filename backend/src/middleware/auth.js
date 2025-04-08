const jwt = require('jsonwebtoken');
const db = require('../config/db');

module.exports = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'Authentication required' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if user exists
        const result = await db.query(
            'SELECT id, email, name FROM users WHERE id = $1',
            [decoded.userId]
        );

        if (result.rows.length === 0) {
            throw new Error();
        }

        // Add user to request object
        req.user = result.rows[0];
        next();
    } catch (err) {
        res.status(401).json({ error: 'Authentication required' });
    }
};