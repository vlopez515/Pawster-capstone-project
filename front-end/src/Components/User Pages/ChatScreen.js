import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

export default function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([//this should also be pulled from the database.
    {
      name: "apple",
      image:
        "https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/bios/ellen-degeneres-2018-450x600.jpg?itok=fqX8puFk",
      message: "what's up",
    },

    {
      name: "apple",
      image:
        "https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/bios/ellen-degeneres-2018-450x600.jpg?itok=fqX8puFk",
      message: "how is it going?",
    },
    {
      message: "what's up",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);//most likely sent it to our database for saved messages.
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH ELLE ON 10/04/20</p>
      {messages.map((message) => {
        return message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        );
      })}

      <form className="chatScreen_input">
        <input
          className="chatScreen_inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
    </div>
  );
}
