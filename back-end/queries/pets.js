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



const addNewPet = async (swipedPet) => {
  try {
    const newPet = await db.one(
      'INSERT INTO pets (name, age, type, house_trained, shots_current, sprayed_neutered, special_needs, primary_breed, mixed, contact_email, contact_phone, address1, city, postcode, size, gender, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
    [
      swipedPet.name,
      swipedPet.age,
      swipedPet.type,
      swipedPet.attributes.house_trained,
      swipedPet.attributes.shots_current,
      swipedPet.attributes.sprayed_neutered,
      swipedPet.attributes.special_needs,
      swipedPet.breeds.primary,
      swipedPet.breeds.mixed,
      swipedPet.contact.email,
      swipedPet.contact.phone,
      swipedPet.contact.address.address1,
      swipedPet.contact.address.city,
      swipedPet.contact.address.postcode,
      swipedPet.size,
      swipedPet.gender,
      swipedPet.description,
    ]
  );
  return newPet
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Something went wrong' });
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