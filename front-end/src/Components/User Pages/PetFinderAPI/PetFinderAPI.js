import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Auth_Token from "./Auth_Token";
import TinderCards from "../TinderCards";
import "./PetFinderAPI.css";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default function PetFinderAPI() {
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();
  // const [token, setToken] = useState(accessToken);

  useEffect(() => {
    axios
      .get("https://pawster.onrender.com/pets")
      .then((response) => setAnimals(response.data))
      // .then(response => console.log(response.data))

      // .then(console.log(snacks))
      .catch((c) => console.warn("catch", c));
  }, []);

  // useEffect(() => {
  //   console.log(token)
  //   axios
  //     .get("https://api.petfinder.com/v2/animals?location=ny", {
  //       headers: {
  //         Authorization:
  //           `Bearer `,
  //       },
  //     })
  //     .then((response) => {
  //       setAnimals(response.data.animals);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [token]);

  return (
    <div className="PetFinderAPI_card">
        <h3>Swipe Right to like &#10084;</h3>
      <button
        className="PetFinderAPI_userLikedPet_Button"
        onClick={() => navigate("/user/1/pets")}
      >
       Click here for &#10084; pets
      </button>

      <TinderCards animals={animals} />
    </div>
  );
}
