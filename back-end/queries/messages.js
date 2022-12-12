const db = require("../db/dbConfig");

const getAllMessages = async () => {
  try {
    const allMessages = await db.any('SELECT * FROM messages');
    return allMessages;
  } catch (err) {
    return err;
  }
};

const getMessage = async (id) => {
  try {
    const oneMessage = await db.one('SELECT * FROM messages WHERE id=$1', id);
    return oneMessage;
  } catch (error) {
    return error;
  }
};

const createMessage = async (enteredMessage) => {
  const { petId, userId, senderRole, date, message } = enteredMessage;
  try {
    const newMessage = await db.one(
      "INSERT INTO messages (petId, userId, senderRole, date, message) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [petId, userId, senderRole, date, message]

    );
    return newMessage;
  } catch (error) {
    return error;
  }
};

const deleteMessage = async (id) => {
  try {
    const deleteMessage = await db.one('DELETE FROM messages WHERE id = $1 RETURNING *', id);
    return deleteMessage;
  } catch (error) {
    return error;
  }
};

const updateMessage = async (pet, id) => {
  const { petId, userId, senderRole, date, message } = message;
  try {

const updatedMessage = await db.one("UPDATE messages SET petId=$1, userId=$2, senderRole=$3, date=$4, message=$5 WHERE id=$6 RETURNING *",
  [ petId, userId, senderRole, date, message ]);

    return updatedMessage;
  } catch (err) {
    return err;
  }
}

module.exports = { 
    getAllMessages, 
    getMessage, 
    createMessage, 
    deleteMessage,
    updateMessage
  };