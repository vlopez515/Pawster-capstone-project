import { Routes, Route } from "react-router-dom";
import HomeScreen from '../Components/Shelter Pages/HomeScreen';
import Header from "../Components/Shelter Pages/Header.js";
import PetForm from "../Components/newPetForm/PetForm";
import Settings from '../Components/Shelter Pages/Settings';
import Footer from '../Components/Shelter Pages/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import EditPeformPage from "../Components/Shelter Pages/EditPeformPage";

import './ShelterStartingScreen.css'

const API = process.env.REACT_APP_API_URL;

function ShelterStartingScreen() {
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios
            .get(`${API}/pets`)
            .then((response) => setPets(response.data))
            .catch((c) => console.warn("catch", c));
    }, []);

    console.log(pets)

    return (
        <>
            <main >
                <Routes>
                    {/* <Route path="/shelter" element={
                        <>
                            <Header />
                            <h1>Welcome Back, NAME </h1>
                            
                        </>
                    } /> */}
                    <Route path="shelter/:id" element={
                        <>
                            <Header />
                            <HomeScreen pets={pets} />
                        </>
                    } />
                    <Route path="shelter/:id/new-pet" element={
                        <>
                            <Header />
                            <PetForm />
                        </>
                    } />
                    <Route path="shelter/:id/edit/:petId" element={
                        <>
                            <Header />
                            <EditPeformPage pets={pets} />
                        </>
                    } />
                    <Route path="shelter/:id/settings" element={
                        <>
                            <Header />
                            <Settings />
                        </>

                    } />
                </Routes>
            </main>
            <Footer />
        </ >
    )

}

export default ShelterStartingScreen




