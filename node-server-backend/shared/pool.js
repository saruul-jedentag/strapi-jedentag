const { Pool } = require("pg");

// PostgreSQL client configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jedentag_last",
  password: ";lkjasdf",
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
