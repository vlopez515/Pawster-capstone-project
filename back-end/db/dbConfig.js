const pgp = require("pg-promise")();
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL

const cn = {
  connectionString: DATABASE_URL,
  allowExitOnIdle: true,
  max: 30,
};

const db = pgp(cn);

console.log('Postgres connection', cn);
module.exports = db;
