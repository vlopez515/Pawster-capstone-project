import * as React from 'react';
import StartIngScreen from './Pages/StartIngScreen';
import {BrowserRouter as Router} from "react-router-dom";
import ContactUs from './Pages/Starting Pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
       { true && 
        <StartIngScreen 
        />}
        {/* Example of How to Switching Screen for User / Shelter */}
        { false && 
        <ContactUs 
        />}
        
      </Router>
    </div>
  );
}

export default App;