import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";

// Links Components Below:
import Header from "../Components/User Pages/Header.js";
import TinderCards from "../Components/User Pages/TinderCards.js";
// import SwipeButtons from "../Components/User Pages/SwipeButtons";
import Chats from "../Components/User Pages/Chats";
import ChatScreen from "../Components/User Pages/ChatScreen.js";
import PetFinderAPI from "../Components/User Pages/PetFinderAPI/PetFinderAPI.js";


function UserStartingScreen() {

  // const [accessToken, setAccessToken] = useState(Auth_Token())
  // // setAccessToken(Auth_Token());

  return (
    <div>
      <Routes>
        <Route path="/" element={
            <div>
              <Header />
              {/* <PetFinderAPI accessToken={Auth_Token()}/> */}
              {/* <SwipeButtons /> */}
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

<Route
          path="/petfinderapi" element={
            <div>
              <Header />
              <PetFinderAPI />
            </div>
          }
        />

      </Routes>
    </div >
  )
}

export default UserStartingScreen