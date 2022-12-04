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
  const { name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status } = pet;
  try {
    const newPet = await db.one(
      "INSERT INTO pets (name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15 ) RETURNING *",
      [name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status]
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
  const { name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status } = pet;
  try {
     const updatedPet = await db.one("UPDATE pets SET name=$1, breed=$2, gender=$3, age=$4, color=$5, size=$6, type=$7, maintenence_level=$8, spayed_neutered=$9, house_trained=$10, description=$11 declawed=$12 special_needs=$13 shots_current=$14, status=$15 WHERE id=$16 RETURNING *",
  [name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, id ]);
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