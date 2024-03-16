var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

var conString = `${DATABASE_URL}` 
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime, 'it works');
    client.end();
  });
});

app.listen(PORT, () => {
    console.log(`🎧 Listening on port ${PORT} 🎧 `);
  });