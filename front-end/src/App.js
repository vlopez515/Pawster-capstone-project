import * as React from 'react';
import StartingScreen from './Pages/StartingScreen';
import { BrowserRouter as Router } from "react-router-dom";
import UserStartingScreen from './Pages/UserStartingScreen';
import ShowForm from './Pages/Form Pages/ShowForm';

// const API = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
    <Router>
     { false && 
      <StartingScreen 
      />}
      {/* Example of How to Switching Screen for User / Shelter */}
      { false && 
      < UserStartingScreen 
      />}
      {
        true && 
        <ShowForm/>
      }
      
    </Router>
    </div>
  );
}

export default App;