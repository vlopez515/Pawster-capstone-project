import { Routes, Route } from "react-router-dom";
import PetForm from "../Components/Forms/PetForm";
import HomeScreen from "../Pages/ShelterPages/HomeScreen"
// import HomeScreen from '../Components/ShelterPages/HomeScreen';
import Settings from '../Pages/ShelterPages/Settings';
import { useState, useEffect } from "react";
import axios from 'axios';

// import EditPeformPage from "../Components/Shelter Pages/EditPeformPage";
// import ShowPet from "../Components/Shelter Pages/ShowPet"

// import NavBar from "../Components/HomeScreenComponents/NavBar";
// import Footer from 

// import './ShelterStartingScreen.css'


// import { useParams } from "react-router-dom";


// const API = process.env.REACT_APP_API_URL;

export default function ShelterStartingScreen() {
    const [pets, setPets] = useState([])
    
    useEffect(() => {
      getPets()
    }, []);
  
    const getPets = async () => {
      await axios.get(`https://pawster.onrender.com/pets`).then((res) => {
        const data = res.data
        console.log(data)
        setPets(data)
      }).catch((c) => console.warn("catch", c));
    }

    return (
        <>
                <Routes>
                    <Route path="/" />
                    <Route path="/:id" element={<HomeScreen pets={pets}/>} />
                    <Route path="/:id/new" element={ <PetForm />} />
                    <Route path="/:id/edit/:petId" element={ "<EditPeformPage pets={pets} /> "} />
                    <Route path="/:id/show/:petId" element={ "<ShowPet pets={pets} /> "} />
                    <Route path="/:id/settings" element={ <Settings />} />
                </Routes>
        </ >
    )

}






