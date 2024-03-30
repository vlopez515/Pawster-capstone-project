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

const addNewPet = async (animal) => {
  const {
    name,
    breed,
    gender,
    age,
    color,
    size,
    type,
    maintenance_level,
    spayed_neutered,
    house_trained,
    description,
    declawed,
    special_needs,
    shots_current,
    status,
    shelter_id,
    image_url,
    phone_number,
  } = animal;

  const newPet = {
    name: name || '',
    breed: breed || '',
    gender,
    age,
    color: color || '',
    size,
    type,
    maintenance_level: maintenance_level || '',
    spayed_neutered: spayed_neutered || false,
    house_trained: house_trained || false,
    description,
    declawed: declawed || false,
    special_needs: special_needs || false,
    shots_current: shots_current || false,
    status,
    shelter_id: shelter_id || '',
    userLiked: true,
    image_url,
    phone_number: phone_number || '',
  };

  try {
    const values = [
      newPet.name,
      newPet.breed,
      newPet.gender,
      newPet.age,
      newPet.color,
      newPet.size,
      newPet.type,
      newPet.maintenance_level,
      newPet.spayed_neutered,
      newPet.house_trained,
      newPet.description,
      newPet.declawed,
      newPet.special_needs,
      newPet.shots_current,
      newPet.status,
      newPet.shelter_id,
      newPet.userLiked,
      newPet.image_url,
      newPet.phone_number,
    ];

    const addedPet = await db.one(`INSERT INTO pets (name, breed, gender, age, color, size, type, maintenance_level, spayed_neutered, house_trained, description, declawed, special_needs, shots_current, status, shelter_id, userLiked, image_url, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *`, values);
    return addedPet;
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