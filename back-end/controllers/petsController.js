const express = require("express");
const Pets = express.Router();
const {
  getAllPets,
  getPet,
  createPet,
  deletePet,
  updatePet
} = require("../queries/Pets.js");

Pets.get("/", async (req, res) => {
  const allPets = await getAllPets();
  if (allPets[0]) {
    res.status(200).json(allPets);
  } else {
    res.status(500).json({ error: "Server Error!" });
  }
});

Pets.get("/:id", async (req, res) => {
  const { id } = req.params;
  const Pet = await getPet(id);
  if (Pet) {
    res.json(Pet);
  } else {
    res.status(404).json({ error: "Pet not found!" });
  }
});

Pets.post("/", async (req, res) => {
  if(req.body) { 
     const createdPet = await createPet(req.body)
      res.status(200).send(createdPet);
    } else{
      res.status(404).send('Error');
    };
  });


Pets.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPet = await deletePet(id);
  if (deletedPet.id) {
    res.status(200).json(deletedPet)
  } else {
    res.status(404).json("Pet not found!");
  }
});

Pets.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPet = await updatePet(req.body, id);
  if (updatedPet.id) {
    res.status(200).json(updatedPet);
  } else {
    res.status(404).json({error: "Pet not updated!"});
  }
});

module.exports = Pets;