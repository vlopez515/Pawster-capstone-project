import React from "react";
import "./Chats.css";
import Chat from "./Chat";

export default function Chats() {
  return (
    <div className="chats">
      <h1>Chats</h1>
      <Chat
        name="apple"
        message="adadada"
        timestamp="40 second ago"
        profilePic="/static/images/avatar/1.jpg"
      />

      <Chat
        name="banan"
        message="qweqweqw"
        timestamp="50 second ago"
        profilePic="/static/images/avatar/1.jpg"
      />
      {/* goona pass the chat function with the info we need as props. */}
    </div>
  );
}
