const db = require("../db/dbConfig");

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
  const { name, breed, weight, gender, age, color, hair_length, size, personality, maintenance_level, neutered, special_needs, description } = pet;
  try {
    const newPet = await db.one(
      "INSERT INTO pets (name, breed, weight, gender, age, color, hair_length, size, personality, maintenance_level, neutered, special_needs, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [name, breed, weight, gender, age, color, hair_length, size, personality, maintenance_level, neutered, special_needs, description]
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
  const { name, breed, weight, gender, age, color, hair_length, size, personality, maintenance_level, neutered, special_needs, description } = pet;
  try {
     const updatedPet = await db.one("UPDATE pets SET name = $1, breed = $2, weight = $3, gender = $4, age = $5, color = $6, hair_length = $7, size = $8, personality = $9, maintenence_level = $10, neutered = $11, special_needs = $12, description = $13 WHERE id = $14 RETURNING *",
  [name, breed, weight, gender, age, color, hair_length, size, personality, maintenance_level, neutered, special_needs, description, id]);
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