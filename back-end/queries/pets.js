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

const addNewPet = (animal) => {
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
    name: name || '' ,
    breed: breed || '', // Replace null with an empty string or a default value
    gender,
    age,
    color: color || '', // Replace null with an empty string or a default value
    size,
    type,
    maintenance_level: maintenance_level || '', // Replace null with an empty string or a default value
    spayed_neutered: spayed_neutered || false, // Replace null with a default value
    house_trained: house_trained || false, // Replace null with a default value
    description,
    declawed: declawed || false, // Replace null with a default value
    special_needs: special_needs || false, // Replace null with a default value
    shots_current: shots_current || false, // Replace null with a default value
    status,
    shelter_id: shelter_id || '', // Replace null with an empty string or a default value
    userLiked: true,
    image_url,
    phone_number: phone_number || '',
  };

  axios
    .post(`${API}/pets`, newPet)
    .then((response) => {
      console.log("New pet added successfully:", response.data);
      // You can optionally update the local state or perform any other necessary actions
    })
    .catch((error) => {
      console.error("Error adding new pet:", error);
    });
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