import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/HomeScreenComponents/NavBar';
import Footer from './Components/HomeScreenComponents/Footer';


// Home Routes 
import AboutPage from './Components/HomeScreenComponents/AboutPage';
import ContactUs from './Components/HomeScreenComponents/ContactUs';
import Feed from './Components/HomeScreenComponents/Feed';
import Support from './Components/HomeScreenComponents/Support';

// Shelter Route
import ShelterStartingScreen from './Pages/ShelterStartingScreen';

import UserForm from './Components/Forms/UserForm';
import PetForm from './Components/Forms/PetForm';

// User Route

const API = process.env.REACT_APP_API_URL;

function App() {


    return (
      <div className="App">

        <Router>
          {/* Keep NavBar so each diff page keeps it */}
          <NavBar />
          <Routes>
            
              {/* Home Routes */}
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={"<Login />"} />
                <Route path="/account" element={" <Account />"} />

              {/* Shelter Routes */}
                <Route path="/shelter/*" element={ <ShelterStartingScreen />} />

              {/* User Routes */}
              <Route path="/userForm/:id" element={ <UserForm />} />

              {/* For JAMAL!!  */}
              <Route path="/jamal" element={<PetForm />} />
          </Routes>
        </Router>


        {/* Keep Footer for all other screens? */}
        <Footer />
      </div>
    )
  }



  export default App;





