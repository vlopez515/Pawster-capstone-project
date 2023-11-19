import React, { useState, useEffect } from "react";

import TinderCards from "../TinderCards";

import { useNavigate } from "react-router-dom";


export default function PetFinderAPI() {
  const [animals, setAnimals] = useState([]);

  const navigate = useNavigate();

  let key = process.env.REACT_APP_PETFINDER_KEY;
  let secret = process.env.REACT_APP_PETFINDER_SECRET;
  let token;

  useEffect(() => {
  fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      key +
      "&client_secret=" +
      secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      token = data.access_token;
    })
    .then(() => {
      // use token to fetch animals
      fetch(
        `https://api.petfinder.com/v2/animals?type=dog&location=90210`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setAnimals(data.animals));
    })
    .catch((err) => console.error(err));
}, []);

// console.log(animals)



  return (
    <div className="PetFinderAPI_card">
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
