const bcrypt = require('bcryptjs');
const db = require('../config/db');

async function createAdmin() {
    try {
        const username = 'admin';
        const password = 'admin123';
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await db.query(
            'INSERT INTO admins (username, password) VALUES ($1, $2)',
            [username, hashedPassword]
        );
        
        console.log('Admin user created successfully');
        console.log('Username:', username);
        console.log('Password:', password);
        
        process.exit(0);
    } catch (err) {
        console.error('Error creating admin user:', err);
        process.exit(1);
    }
}

createAdmin();