const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const auth = require('../middleware/auth');

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Check if user already exists
        const userExists = await db.query(
            'SELECT id FROM users WHERE email = $1',
            [email]
        );

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const result = await db.query(
            'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name',
            [email, hashedPassword, name]
        );

        const user = result.rows[0];

        // Create JWT token
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const result = await db.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        const user = result.rows[0];

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get user orders
router.get('/orders', auth, async (req, res) => {
    try {
        const orders = await db.query(
            `SELECT o.*, 
                    json_agg(json_build_object(
                        'id', oi.id,
                        'product_id', oi.product_id,
                        'quantity', oi.quantity,
                        'price', oi.price,
                        'product', json_build_object(
                            'name', p.name,
                            'image_url', p.image_url
                        )
                    )) as items
             FROM orders o
             LEFT JOIN order_items oi ON o.id = oi.order_id
             LEFT JOIN products p ON oi.product_id = p.id
             WHERE o.user_id = $1
             GROUP BY o.id
             ORDER BY o.created_at DESC`,
            [req.user.id]
        );

        res.json(orders.rows);
    } catch (err) {
        console.error('Error fetching user orders:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get user profile
router.get('/profile', auth, async (req, res) => {
    try {
        const result = await db.query(
            'SELECT id, email, name, created_at FROM users WHERE id = $1',
            [req.user.id]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching user profile:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;