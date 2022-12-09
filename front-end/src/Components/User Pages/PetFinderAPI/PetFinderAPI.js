import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Auth_Token from "./Auth_Token";
import TinderCards from "../TinderCards";
import "./PetFinderAPI.css";

const API = process.env.REACT_APP_API_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default function PetFinderAPI({accessToken}) {
  const [animals, setAnimals] = useState([]);
const [token, setToken] = useState(accessToken);

  useEffect(() => {
    console.log(token)
    axios
      .get("https://api.petfinder.com/v2/animals?location=ny", {
        headers: {
          Authorization:
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrazBKSHFqalhYTkI4V25tWWo5VFZZbFBiSWJoNlFiMlZiRW1nbXJ6eUYxd0pHaE5kRSIsImp0aSI6IjU2NDFiMjQ2ZjU0YWY2ZTdiN2EyYmE5ODU5MGZiMWQ4Y2JhYWMxYWU5M2M2OTI2NGNmMmU3YWM0Mzk0ZTlkMjE2ZjNjN2FkOTRkZmJhNTNlIiwiaWF0IjoxNjcwNTQ3Njg2LCJuYmYiOjE2NzA1NDc2ODYsImV4cCI6MTY3MDU1MTI4NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.cDI9maJNCdGDEdEUU5aF3Rx4PpJkeQyb7fu_jQyMH5IzXhmRHO6sGHDbJm4Hxnaox1gCvJ_3LJWzeLIcZ2oEOzWELZ1x2LFFKeLSjN1dY4-hTM78Z1XpEvBrgERc5vWK02qAdxvpvUkDWu8G5BwfDOeZ5ygLNr1OiE2UwnUcvZPkEm5Z5ruRTgO3GoAXOV1sEz59Ajlp6wWVOJIMTqv50H-HfQ4tHUQXZ9CQgPJIRcx3BveGsw8-dUym1DhfOi4Ai9S94_unoBLOHdPMn8bDFhX5IS2NcwG1MvSj7diEDS4vzYtg50Miz4nx0p-zvdmyeTiXVSCwaVfvfBpjZGZ4pA`,
        },
      })
      .then((response) => {
        setAnimals(response.data.animals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);


  return (
    <div className="PetFinderAPI_card">
      <TinderCards animals={animals} name={animals.name} />
    </div>
  );
}
