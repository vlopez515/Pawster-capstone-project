import React, { useState, useEffect } from "react";
import TinderCards from "../TinderCards";



export default function PetFinderAPI() {
  const [animals, setAnimals] = useState([]);


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
        `https://api.petfinder.com/v2/animals?location=10001`,
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


let animalsWithPics = animals.filter((animal) => animal.photos.length > 0)

console.log(animalsWithPics[0], 'pic')


  return (
    <>
      <TinderCards animals={animalsWithPics} />
    </>
  );
}
