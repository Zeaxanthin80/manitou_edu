const { Pool } = require('pg');

const pool = new Pool({
    user: 'jose',
    host: 'localhost',
    database: 'manitou_edu',
    password: 'manitou123',
    port: 5432,
});

module.exports = pool;