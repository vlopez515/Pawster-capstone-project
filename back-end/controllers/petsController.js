const express = require("express");
const pets = express.Router();
const {
  getAllPets,
  getPet,
  createPet,
  deletePet,
  updatePet
} = require("../queries/pets.js");

pets.get("/", async (req, res) => {
  const allPets = await getAllPets();
  if (allPets[0]) {
    res.status(200).json(allPets);
  } else {
    res.status(500).json({ error: "No Pets!" });
  }
});

pets.get("/:id", async (req, res) => {
  const { id } = req.params;
  const Pet = await getPet(id);
  if (Pet) {
    res.json(Pet);
  } else {
    res.status(404).json({ error: "Pet not found!" });
  }
});

pets.post("/", async (req, res) => {
  if(req.body) { 
     const createdPet = await createPet(req.body)
      res.status(200).send(createdPet);
    } else{
      res.status(404).send('Error');
    };
  });


pets.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPet = await deletePet(id);
  if (deletedPet.id) {
    res.status(200).json(deletedPet)
  } else {
    res.status(404).json("Pet not found!");
  }
});

pets.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPet = await updatePet(req.body, id);
  console.log(updatedPet)
  if (updatedPet.id) {
    res.status(200).json(updatedPet);
  } else {
    res.status(404).json({error: "Pet not updated!"});
  }
});

module.exports = pets;