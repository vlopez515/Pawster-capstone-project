import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

export default function ChatScreen({ onlyPetMsg, filteredPets, setPetMsg }) {

  const [newMessage, sendNewMessage] = useState({
    petId: 1, // petId
    userId: 2, // id
    senderRole: "user",
    message: "",
  });

  console.log(onlyPetMsg, newMessage)

  const handleTextChange = (event) => {
    sendNewMessage({ ...newMessage, [event.target.id]: event.target.value });
  };

  const handleSend = (event) => {
    event.preventDefault();
    setPetMsg([...onlyPetMsg, newMessage])
    sendNewMessage({ ...newMessage, ['message']: "" })
  };


  return (
    <>
      <div className="container-message-only">
        <p className="chatScreen_timestamp" >YOU MATCHED!</p>
        {
          onlyPetMsg.length ? (
            onlyPetMsg.map((msg) => {
              let petShown = filteredPets.filter((el) => el.id === Number(msg.petid));
              return msg.senderrole === 'pet' ? (

                <div className="chatScreen_message">
                  <Avatar
                    className="chatScreen_image"
                    alt={msg.name}
                    src={petShown[0].image_url}

                  />
                  <p className="chatScreen_text">{msg.message}</p>
                </div>
              ) : (
                <div className="chatScreen_message">
                  <p className="chatScreen_textUser">{msg.message}</p>
                </div>
              )
            })
          )
            :
            null
        }
      </div>

      <form className="chatScreen_input">
        <input
          className="chatScreen_inputField"
          id="message"
          value={newMessage.message}
          onChange={handleTextChange}
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>


    </>
  );
}
