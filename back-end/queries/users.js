const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any('SELECT * FROM users');
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one('SELECT * FROM users WHERE id=$1', id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

const createUser = async (user) => {
  const { name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email } = user;
  try {
    const newUser = await db.one(
      'INSERT INTO users (name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
      [name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one('DELETE FROM users WHERE id = $1 RETURNING *', id);
    return deletedUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (user, id) => {
  const { name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email } = user;
  try {
     const updatedUser = await db.one('UPDATE users SET name=$1, income=$2, age=$3, sex=$4, household_size=$5, residence_type=$6, free_time=$7, preferences=$8, pet_type=$9, address=$10, proof_of_residence=$11, photo_id=$12, proof_of_pets_allowed=$13, phone_number=$14, email=$15 WHERE id=$16 RETURNING *',
  [name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email, id]);
    return updatedUser;
  } catch (err) {
    return err;
  }
};

const getAllPetsForUser = async (id) => {
  try {
    const petsByUser = db.any(
      `SELECT 
                pet_id, user_id, pets.name, pets.type
            FROM
                users_pets
            JOIN
                pets
            ON
                pets.id = users_pets.pet_id
            WHERE
                users_pets.user_id = $1
            `,
      id
    );
    return petsByUser;
  } catch (err) {
    return err;
  }
};

module.exports = { 
    getAllUsers, 
    getUser, 
    createUser, 
    deleteUser,
    updateUser,
    getAllPetsForUser
  };