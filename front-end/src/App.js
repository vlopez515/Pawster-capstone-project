import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/HomeScreenComponents/NavBar';
import Footer from './Components/HomeScreenComponents/Footer';
import Account from './Components/HomeScreenComponents/Account';
// import Login from './Components/HomeScreenComponents/Login';
import { AuthContextProvider } from "./Context/AuthContext";
import Login from './Components/Login';

// Home Routes 
import AboutPage from './Components/HomeScreenComponents/AboutPage';
import ContactUs from './Components/HomeScreenComponents/ContactUs';
import Feed from './Components/HomeScreenComponents/Feed';
import Support from './Components/HomeScreenComponents/Support';

// User Route
import TinderCards from "../src/Components/User Pages/PetFinderAPI/PetFinderAPI"

import "./App.css"

function App() {


    return (
      <div className="app">
      <AuthContextProvider>
        <Router>
          {/* Keep NavBar so each diff page keeps it */}
          <NavBar />

          <Routes>
              {/* Home Routes */}
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/support" element={<Support />} />
                <Route path='/contactUs' element={<ContactUs />} />
                
                
                <Route path="/login" element={<Login />} />
              
                <Route path='/account' element={<Account/>} />

              {/* User Routes */}
              {/* <Route path="/userForm/:id" element={ <UserForm />} /> */}
              <Route path="/user/:id/explore" element={ <TinderCards />} />
              
              
            

              {/*  */}
            
            

          </Routes>
        </Router>
    </AuthContextProvider>
        {/* Keep Footer for all other screens? */}
        <Footer className="footer" />
      </div>
    )
  }



  export default App;



