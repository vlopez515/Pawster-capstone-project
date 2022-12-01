// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const app = express();

// CONTROLLERS
const usersController = require("./controllers/usersController");

app.use(cors());
app.use(express.json()); 

app.use("/users", usersController) 


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//404
app.get("*", (req, res) => {
  res.status(404).send("page not found - this is from line 20 by the way")
})

const db = require("./db/dbConfig.js");

// app.get("/data", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM data");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

module.exports = app;
