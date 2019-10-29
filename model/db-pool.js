const { Pool } = require('pg');

const { uri } = require('../config').db;

const pool = new Pool({
  connectionString: uri,
});

module.exports = pool;
