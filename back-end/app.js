// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const app = express();

// CONTROLLERS
const usersController = require("./controllers/usersController");
const petsController = require("./controllers/petsController");
const sheltersController = require("./controllers/sheltersController");
const messageController = require("./controllers/messageController");

app.use(cors());
app.use(express.json()); 

app.use("/users", usersController);
app.use("/pets", petsController);
app.use("/shelters", sheltersController);
app.use("/messages", messageController);


app.get("/", (req, res) => {
  res.send("Hello, world!");
});


//404
app.get("*", (req, res) => {
  res.status(404).send("page not found")
})


module.exports = app;
