import * as React from 'react';
import StartIngScreen from './Pages/StartIngScreen';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// const API = process.env.REACT_APP_API_URL;
import Header from "./Components/Header.js";
import TinderCards from "./Components/TinderCards.js";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Components/Chats";
import ChatScreen from "./Components/ChatScreen.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </div>
            }
          />

<Route
            path="/StartIngScreen"
            element={
              <div>
                <StartIngScreen />
              </div>
            }
          />


          <Route
            path="/chats"
            element={
              <div>
                <Header backButton="/" />
                <Chats />
              </div>
            }
          />

          <Route
            path="/chats/:animal"
            element={
              <div>
                <Header backButton="/chats" />
                <ChatScreen />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;