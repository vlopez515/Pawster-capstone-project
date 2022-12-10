import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/HomeScreenComponents/NavBar';
import Footer from './Components/HomeScreenComponents/Footer';

// Authentication
import { AuthContextProvider } from "./Context/AuthContext";

// Home Routes 
import AboutPage from './Components/HomeScreenComponents/AboutPage';
import ContactUs from './Components/HomeScreenComponents/ContactUs';
import Feed from './Components/HomeScreenComponents/Feed';
import Support from './Components/HomeScreenComponents/Support';

// Shelter Route
import ShelterStartingScreen from './Pages/ShelterStartingScreen';

import UserForm from './Components/Forms/UserForm';


// User Route
import UserStartingScreen from "../src/Pages/UserStartingScreen"
import TinderCards from "../src/Components/User Pages/PetFinderAPI/PetFinderAPI"
import UserLikedPet from "../src/Components/User Pages/UserLikedPet.js"
function App() {


    return (
      <div className="App">
      <AuthContextProvider>
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
              {/* <Route path="/userForm/:id" element={ <UserForm />} /> */}
              <Route path="/user/:id/explore" element={ <TinderCards />} />
              <Route path="/user/:id/pets" element={<UserLikedPet />} />
          </Routes>
        </Router>
    </AuthContextProvider>
        {/* Keep Footer for all other screens? */}
        <Footer />
      </div>
    )
  }



  export default App;



