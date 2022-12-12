const express = require("express");
const messages = express.Router();
const {
    getAllMessages, 
    getMessage, 
    createMessage, 
    deleteMessage,
    updateMessage
} = require("../queries/messages.js");

messages.get("/", async (req, res) => {
  const allMessages = await getAllMessages();
  if (allMessages[0]) {
    res.status(200).json(allMessages);
  } else {
    res.status(500).json({ error: "No messages!" });
  }
});

messages.get("/:id", async (req, res) => {
  const { id } = req.params;
  const Message = await getMessage(id);
  if (Message) {
    res.json(Message);
  } else {
    res.status(404).json({ error: "Message not found!" });
  }
});

messages.post("/", async (req, res) => {
  if(req.body) { 
     const createdMessage = await createMessage(req.body)
      res.status(200).send(createdMessage);
    } else{
      res.status(404).send('Error');
    };
  });


messages.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedMessage = await deleteMessage(id);
  if (deletedMessage.id) {
    res.status(200).json(deletedMessage)
  } else {
    res.status(404).json("Message not found!");
  }
});

messages.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedMessage = await updateMessage(req.body, id);
  console.log(updatedMessage)
  if (updatedMessage.id) {
    res.status(200).json(updatedMessage);
  } else {
    res.status(404).json({error: "Pet not updated!"});
  }
});

module.exports = messages;