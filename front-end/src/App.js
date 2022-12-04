import * as React from 'react';
// import React, { useState, useEffect, createContext } from "react";
import StartingScreen from './Pages/StartingScreen';
import { BrowserRouter as Router } from "react-router-dom";
import UserStartingScreen from './Pages/UserStartingScreen';
import "./App.css";

function App() {
  

  return (
    <div className="App">
    <Router>
     { false && 
      <StartingScreen 
      />}
      {/* Example of How to Switching Screen for User / Shelter */}
      { true && 
      < UserStartingScreen 
      />}
      
    </Router>
    </div>
  );
}

export default App;