const {Pool} = require('pg');

const myURI = 'postgres://zsjcxjki:O3tVLbjT4rPrKJy-iET3O-QGIaYJys2A@salt.db.elephantsql.com:5432/zsjcxjki';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI
});

module.exports = pool;