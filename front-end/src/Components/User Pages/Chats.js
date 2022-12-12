import React from "react";
import "./Chats.css";
import Chat from "./Chat";

export default function Chats({ pet }) {
  console.log(pet, "here")

  return (
    <div className="chats">
      <Chat
        name={pet.name}
        message="adadada"
        timestamp="40 second ago"
        profilePic={pet.image_url}
      />
    </div>
  );
}
