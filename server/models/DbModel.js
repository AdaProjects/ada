const {Pool} = require('pg');

const URI = `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_URL}:${process.env.PG_PORT}/${process.env.PG_USERNAME}`

const pool = new Pool({
  connectionString: URI
});

module.exports = pool;
