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
      .get("http://localhost:3333/pets")
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
        <a
          href="#_"
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Liked Pets
          </span>
          <span class="relative invisible">Liked Pets</span>
        </a>
      </button>
      <TinderCards animals={animals} />
    </div>
  );
}
