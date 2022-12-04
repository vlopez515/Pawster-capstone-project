const db = require("../db/dbConfig.js");

const getAllPets = async () => {
  try {
    const allPets = await db.any("SELECT * FROM pets");
    return allPets;
  } catch (err) {
    return err;
  }
};

const getPet = async (id) => {
  try {
    const onePet = await db.one("SELECT * FROM pets WHERE id=$1", id);
    return onePet;
  } catch (error) {
    return error;
  }
};

const createPet = async (pet) => {
  const { name, type, breed, size, gender, age, color, spray_neutered,house_trained,declawed,special_needs, shots_current, description, status } = pet;
  try {
    const newPet = await db.one(
      "INSERT INTO pets (name, type, breed, size, gender, age, color, spray_neutered,house_trained,declawed,special_needs, shots_current, description, status ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
      [name, type, breed, size, gender, age, color, spray_neutered,house_trained,declawed,special_needs, shots_current, description, status ]
    );
    return newPet;
  } catch (error) {
    return error;
  }
};

const deletePet = async (id) => {
  try {
    const deletedPet = await db.one("DELETE FROM pets WHERE id = $1 RETURNING *", id);
    return deletedPet;
  } catch (error) {
    return error;
  }
};

const updatePet = async (pet, id) => {
  const { name, type, breed, size, gender, age, color, spray_neutered,house_trained,declawed,special_needs, shots_current, description, status } = pet;
  try {
     const updatedPet = await db.one("UPDATE pets SET name = $1, type = $2, breed = $3, size = $4, gender = $5, age = $6, color = $7, spray_neutered = $8, house_trained = $9, declawed = $10, special_needs = $11, shots_current = $12, description = $13, status = $14 WHERE id = $15 RETURNING *",
  [name, type, breed, size, gender, age, color, spray_neutered,house_trained,declawed,special_needs, shots_current, description, status ]);
    return updatedPet;
  } catch (err) {
    return err;
  }
}

module.exports = { 
    getAllPets, 
    getPet, 
    createPet, 
    deletePet,
    updatePet
  };