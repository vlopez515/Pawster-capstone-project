import * as React from 'react';
import StartingScreen from './Pages/StartingScreen';
import {BrowserRouter as Router} from "react-router-dom";
// import { UserProvider } from "./Providers/UserProvider";
import UserStartingScreen from './Pages/UserStartingScreen';
import ShelterStartingScreen from './Pages/ShelterStartingScreen';
import {AuthContextProvider} from './Context/AuthContext';
//  import {UserAuth} from '../src/Context/AuthContext';
//  import { UserAuth } from '../Context/AuthContext';
// import { UserAuth } from '../Context/';
function App() {
  // const {user} = UserAuth();
  
  return (
    <div className="App">
    <AuthContextProvider>
    
    <Router>
      
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
          {/* if ( user ?  <UserStartingScreen/> :  <StartingScreen 
           /> ) */}

        
     </Router>
     </AuthContextProvider>
    </div>
  );
}

export default App;