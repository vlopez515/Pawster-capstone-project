// DEPENDENCIES
const cors = require("cors");
const express = require("express");


const app = express();


app.use(cors());
app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Hello, world!");
});


const db = require("./db/dbConfig.js");

app.get("/data", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM data");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});


module.exports = app;
