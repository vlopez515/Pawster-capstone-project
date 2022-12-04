import * as React from 'react';
import StartingScreen from './Pages/StartingScreen';
import {BrowserRouter as Router} from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider";
import UserStartingScreen from './Pages/UserStartingScreen';
import ShelterStartingScreen from './Pages/ShelterStartingScreen';


function App() {
  return (
    <div className="App">
    <Router>
      <UserProvider>
          { true && 
            <StartingScreen 
           />}
            {/* Example of How to Switching Screen for User / Shelter */}
          { false && 
            <UserStartingScreen/>
            // <ContactUs />
          }
          {
            false && 
            <ShelterStartingScreen />
          }

        </UserProvider>
     </Router>
    </div>
  );
}

export default App;