// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require("pg-promise")();
require("dotenv").config();


const databaseUrl = process.env.DATABASE_URL;

const cn = {
  connectionString: databaseUrl,
  allowExitOnIdle: true,
  max: 30,
};


const db = pgp(cn);

console.log('Postgres connection', cn);
module.exports = db;
