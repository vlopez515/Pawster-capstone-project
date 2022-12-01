import * as React from 'react';
import StartingScreen from './Pages/StartingScreen';
import {BrowserRouter as Router} from "react-router-dom";
import ContactUs from './Pages/Starting Pages/ContactUs';
import { LoginPage } from "./Pages/LoginPage";
import { UserProvider } from "./Providers/UserProvider";
import { LoggedInPage } from "./Pages/LoggedInPage";

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
            <ContactUs 
           />}
        </UserProvider>
     </Router>
    </div>
  );
}

export default App;