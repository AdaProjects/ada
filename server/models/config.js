require('dotenv').config()

const { Pool } = require('pg')

const connectionString = `postgresql://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_URL}:${process.env.PG_PORT}/${process.env.PG_USERNAME}`

const pool = new Pool({
  connectionString: connectionString
})

module.exports = { pool }
