const {Pool} = require('pg');

const URI = process.env.PG_URI

const pool = new Pool({
  connectionString: URI
});

module.exports = pool;