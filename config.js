require('dotenv').config();

module.exports = {
  environment: process.env.NODE_ENV || 'dev',
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    uri: process.env.DATABASE_URL,
  },
};
