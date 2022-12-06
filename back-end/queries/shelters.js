const db = require("../db/dbConfig.js");

const getAllShelters = async () => {
  try {
    const allShelters = await db.any('SELECT * FROM shelters');
    return allShelters;
  } catch (err) {
    return err;
  }
};

const getShelter = async (id) => {
  try {
    const oneShelter = await db.one('SELECT * FROM shelters WHERE id=$1', id);
    return oneShelter;
  } catch (error) {
    return error;
  }
};

const createShelter = async (shelter) => {
  const { name, address, business_hours, phone_number, email } = shelter;
  try {
    const newShelter = await db.one(
      'INSERT INTO shelters (name, address, business_hours, phone_number, email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, address, business_hours, phone_number, email]
    );
    return newShelter;
  } catch (error) {
    return error;
  }
};

const deleteShelter = async (id) => {
  try {
    const deletedShelter = await db.one('DELETE FROM shelters WHERE id = $1 RETURNING *', id);
    return deletedShelter;
  } catch (error) {
    return error;
  }
};

const updateShelter = async (shelter, id) => {
  const { name, address, business_hours, phone_number, email} = shelter
  try {
     const updatedShelter = await db.one('UPDATE shelters SET name = $1, address = $2,business_hours = $3, phone_number = $4, email = $5 WHERE id = $6 RETURNING *',
     [name, address, business_hours, phone_number, email, id]);
    return updatedShelter;
  } catch (err) {
    return err;
  }
}

module.exports = { 
    getAllShelters, 
    getShelter, 
    createShelter, 
    deleteShelter,
    updateShelter
  };