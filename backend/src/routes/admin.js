const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../middleware/auth');
const db = require('../config/db');

// Admin login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Get admin from database
        const result = await db.query('SELECT * FROM admins WHERE username = $1', [username]);
        
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const admin = result.rows[0];
        const validPassword = await bcrypt.compare(password, admin.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Create and assign token
        const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;