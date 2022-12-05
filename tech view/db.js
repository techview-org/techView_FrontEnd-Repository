const { Pool } = require('pg')

const pool = new Pool({
  database: 'marcy',
  user:     'marcy',
  password: 'marcy',
  host: 'localhost',
  port: 5432

})
// production: {
//   client: 'pg',
//   connection: 8000
// },




module.exports = {pool}