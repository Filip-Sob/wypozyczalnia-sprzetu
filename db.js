const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'wypozyczalnia_db',
  password: 'admin123', // <-- użyj własnego hasła
  port: 5432,
});

module.exports = pool;
