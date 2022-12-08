import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutPage from './Components/HomeScreenComponents/AboutPage';
import ContactUs from './Components/HomeScreenComponents/ContactUs';
import Feed from './Components/HomeScreenComponents/Feed';
import Support from './Components/HomeScreenComponents/Support';
import Login from './Components/Login';
import Account from './Components/HomeScreenComponents/Account';


import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HomeScreenRoutes() {
    const API = process.env.REACT_APP_API_URL;

  
    const { id, petId } = useParams();
    console.log(id)
    const [pets, setPets] = useState([])
    useEffect(() => {
      axios
        .get(`${API}/pets`)
        .then((response) => setPets(response.data))
        .catch((c) => console.warn("catch", c));
    }, []);
    
    return (
        <>
                {/* Links */}
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                       
        </>
    )
}

export default HomeScreenRoutes