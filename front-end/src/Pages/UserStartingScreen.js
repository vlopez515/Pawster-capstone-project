import React from 'react';
import { Routes, Route } from "react-router-dom";

// Links Components Below:
import Header from "../Components/User Pages/Header.js";
import TinderCards from "../Components/User Pages/TinderCards.js";
import SwipeButtons from "../Components/User Pages/SwipeButtons";
import Chats from "../Components/User Pages/Chats";
import ChatScreen from "../Components/User Pages/ChatScreen.js";

function UserStartingScreen() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
            <div>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </div>
          }
        />

        <Route
          path="/chats" element={
            <div>
              <Header backButton="/" />
              <Chats />
            </div>
          }
        />

        <Route
          path="/chats/:animal" element={
            <div>
              <Header backButton="/chats" />
              <ChatScreen />
            </div>
          }
        />
      </Routes>
    </div >
  )
}

export default UserStartingScreen