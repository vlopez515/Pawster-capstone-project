import { Routes, Route } from "react-router-dom";
// import HomeScreen from '../Components/Shelter Pages/HomeScreen';
// import PetForm from "../Components/newPetForm/PetForm";
// import Settings from '../Components/Shelter Pages/Settings';

// import EditPeformPage from "../Components/Shelter Pages/EditPeformPage";
// import ShowPet from "../Components/Shelter Pages/ShowPet"

// import NavBar from "../Components/HomeScreenComponents/NavBar";
// import Footer from 

// import './ShelterStartingScreen.css'

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ShelterStartingScreen() {
    const { id, petId } = useParams();
    console.log(id)
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
                <Routes>
                    <Route path="shelter/:id" element={ "<HomeScreen pets={pets} />"} />
                    <Route path="shelter/:id/new-pet" element={ "<PetForm />"} />
                    <Route path="shelter/:id/edit/:petId" element={ "<EditPeformPage pets={pets} /> "} />
                    <Route path="shelter/:id/show/:petId" element={ "<ShowPet pets={pets} /> "} />
                    <Route path="shelter/:id/settings" element={ "<Settings />" } />
                </Routes>
        </ >
    )

}






