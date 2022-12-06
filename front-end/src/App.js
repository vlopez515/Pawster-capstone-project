import * as React from 'react';
// import React, { useState, useEffect, createContext } from "react";
import StartingScreen from './Pages/StartingScreen';
import { BrowserRouter as Router } from "react-router-dom";
// import { UserProvider } from "./Providers/UserProvider";
import UserStartingScreen from './Pages/UserStartingScreen';
import "./App.css";
import ShelterStartingScreen from './Pages/ShelterStartingScreen';
import { AuthContextProvider } from './Context/AuthContext';

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          {false &&
            <StartingScreen />}
          {/* Example of How to Switching Screen for User / Shelter */}
          {false &&
            <UserStartingScreen />
            // <ContactUs />
          }
          {
            true &&
            <ShelterStartingScreen />
          }
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;