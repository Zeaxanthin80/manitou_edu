const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: 'jose',
    host: 'localhost',
    database: 'manitou_edu',
    password: 'manitou123',
    port: 5432,
});

async function initializeDatabase() {
    try {
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');
        
        await pool.query(schema);
        console.log('Database schema initialized successfully');
        
        process.exit(0);
    } catch (err) {
        console.error('Error initializing database:', err);
        process.exit(1);
    }
}

initializeDatabase();