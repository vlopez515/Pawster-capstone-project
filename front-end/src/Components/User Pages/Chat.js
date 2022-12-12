import React from "react";
import { Avatar } from "@mui/material";
import "./Chat.css";


export default function Chat({ pet, petId, allMessages, setPetMsg }) {
  
    let sorted = allMessages.filter(item => Number(item.petid) === petId)
    console.log(sorted)

  return (
    <div className='chat-container-button' onClick={() => setPetMsg(sorted)}>
      <div className="chat">
        <Avatar className="chat_image" alt={pet.name} src={pet.image_url} />
        <div className="chat_details">
          <h3>{pet.name}</h3>
          <p>click to see message</p>
        </div>
        {/* <p className="chat_timestamp">TIMESTAMP</p> */}
      </div>
    </div>
  );
}
