const express = require("express");
const users = express.Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../queries/users.js");

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  console.log(allUsers)
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(404).json({ error: "No Users" });
  }
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});


users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user.id) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});

users.post("/", async (req, res) => {
  const createdUser = await createUser(req.body);
  if (createdUser.id) {
    res.json(createdUser);
  } else {
    res.status(422).json({ error: "Could not create user." });
  }
});

users.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await updateUser(req.body, id);
  if (updatedUser.id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(422).json({ error: "Could not update user." });
  }
});

// users.get("/:id/pets", async (req, res) => {
//   const { id } = req.params;
//   const usersPets = await getAllPetsForUser(id);
//   res.json(usersPets);
// });

// users.post("/:id/pets/:petId", async (req, res) => {
//   const { id, petId } = req.params;
//   const successfulAdd = await addNewPetForUser(id, petId);
//   if (successfulAdd) {
//     res.status(201).json({ message: "Pet liked!" })
//   } else {
//       res.status(422).json({ error: "Unprocessable entity" });
//     }
// });


module.exports = users;
