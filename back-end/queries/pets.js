const db = require("../db/dbConfig");

const getAllPets = async () => {
  try {
    const allPets = await db.any('SELECT * FROM pets');
    return allPets;
  } catch (err) {
    return err;
  }
};

const getPet = async (id) => {
  try {
    const onePet = await db.one('SELECT * FROM pets WHERE id=$1', id);
    return onePet;
  } catch (error) {
    return error;
  }
};

const addNewPet = async (pet) => {
  try {
    const newPet = await db.one(
      'INSERT INTO pets (name, age, type, house_trained, shots_current, sprayed_neutered, special_needs, primary_breed, mixed, contact_email, contact_phone, address1, city, postcode, size, gender, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
    [
      pet.name,
      pet.age,
      pet.type,
      pet.attributes.house_trained,
      pet.attributes.shots_current,
      pet.attributes.sprayed_neutered,
      pet.attributes.special_needs,
      pet.breeds.primary,
      pet.breeds.mixed,
      pet.contact.email,
      pet.contact.phone,
      pet.address.address1,
      pet.address.city,
      pet.address.postcode,
      pet.size,
      pet.gender,
      pet.description,
    ]
  );
  return newPet
  } catch (error) {
    return 'query didnt work';
  }
};

const deletePet = async (id) => {
  try {
    const deletedPet = await db.one('DELETE FROM pets WHERE id = $1 RETURNING *', id);
    return deletedPet;
  } catch (error) {
    return error;
  }
};

module.exports = { 
    getAllPets, 
    getPet, 
    addNewPet, 
    deletePet,
  };