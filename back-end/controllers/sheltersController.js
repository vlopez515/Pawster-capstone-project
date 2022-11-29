const express = require("express");
const Shelters = express.Router();
const {
  getAllShelters,
  getShelter,
  createShelter,
  deleteShelter,
  updateShelter
} = require("../queries/shelters.js");

Shelters.get("/", async (req, res) => {
  const allShelters = await getAllShelters();
  if (allShelters[0]) {
    res.status(200).json(allShelters);
  } else {
    res.status(500).json({ error: "Server Error!" });
  }
});

Shelters.get("/:id", async (req, res) => {
  const { id } = req.params;
  const Shelter = await getShelter(id);
  if (Shelter) {
    res.json(Shelter);
  } else {
    res.status(404).json({ error: "Shelter not found!" });
  }
});

Shelters.post("/", async (req, res) => {
  if(req.body) { 
     const createdShelter = await createShelter(req.body)
      res.status(200).send(createdShelter);
    } else{
      res.status(404).send('Error');
    };
  });


Shelters.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedShelter = await deleteShelter(id);
  if (deletedShelter.id) {
    res.status(200).json(deletedShelter)
  } else {
    res.status(404).json("Shelter not found!");
  }
});

Shelters.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedShelter = await updateShelter(req.body, id);
  if (updatedShelter.id) {
    res.status(200).json(updatedShelter);
  } else {
    res.status(404).json({error: "Shelter not updated!"});
  }
});

module.exports = Shelters;