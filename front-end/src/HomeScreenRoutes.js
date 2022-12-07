import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutPage from './Components/HomeScreenComponents/AboutPage';
import ContactUs from './Components/HomeScreenComponents/ContactUs';
import Feed from './Components/HomeScreenComponents/Feed';
import Support from './Components/HomeScreenComponents/Support';

// import {Login} from "../Components/HomeScreen/Login";
// import Account from "../Components/HomeScreen/Account"

function HomeScreenRoutes() {
    return (
        <>
            <Routes>
                {/* Links */}
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route 
                path="/login" 
                element={""
                // <Login />
            } />
                <Route 
                path="/account" 
                element={""
                // <Account />
                } />
            </ Routes>

        </>
    )
}

export default HomeScreenRoutes