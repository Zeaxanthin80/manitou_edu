const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { auth } = require('../middleware/auth');

// Get all orders - Protected route, requires admin authentication
router.get('/', auth, async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM orders');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new order - Public route
router.post('/', async (req, res) => {
    try {
        const { customerName, email, address, items, total, usdtAddress } = req.body;
        
        // Start a transaction
        await db.query('BEGIN');
        
        // Insert order
        const orderResult = await db.query(
            'INSERT INTO orders (customer_name, email, address, total, usdt_address, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
            [customerName, email, address, total, usdtAddress, 'pending']
        );
        
        const orderId = orderResult.rows[0].id;
        
        // Insert order items
        for (const item of items) {
            await db.query(
                'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',
                [orderId, item.id, item.quantity, item.price]
            );
        }
        
        await db.query('COMMIT');
        
        res.status(201).json({
            message: 'Order created successfully',
            orderId
        });
    } catch (err) {
        await db.query('ROLLBACK');
        res.status(500).json({ error: err.message });
    }
});

// Get order status - Public route but only returns specific order
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('SELECT * FROM orders WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;