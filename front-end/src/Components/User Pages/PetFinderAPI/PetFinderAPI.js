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
      .get("http://localhost:2222/pets")
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
  //           `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrazBKSHFqalhYTkI4V25tWWo5VFZZbFBiSWJoNlFiMlZiRW1nbXJ6eUYxd0pHaE5kRSIsImp0aSI6ImQyMWMwYjY5MGZlOTkyN2YxZjgxMGExMTAyMzg1ZDI2YTY0YjY4ZTA4YzdlZDQ0Njc3Nzc2ODIxMjJlY2JjYzQ5Y2NiMmJhMzFkZjM2NDA3IiwiaWF0IjoxNjcwNTUxODkxLCJuYmYiOjE2NzA1NTE4OTEsImV4cCI6MTY3MDU1NTQ5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.FVMOUI_6sXt2WpKbsnw3soapu5wMdj6S5WChFYnrJqDOgojUDxgbbLH36vH5I0jHdQf8hxAWW8F9KGR7x2dnYNsMwuGTZtNuH0pfexJVbO22zXbodGpoOuw0OejR28OuXTK8zorAATX_W7RqRObqS3r9lezs77kRzUEt-e1XHFzH0GmIxeRg3xPgCiAPCYMdVgOXtkdQc_6KPRU_5z8gq7fIgpFbCpDE2L110RBpwq7Xk1FG-pp3NxmIKq_OIiUnUlPoF_mdKNwgq5LWwzdzxh0eZjQGx111zf8nMe3F2yrsNXVbUIO87GHuza5mYJScJasHMaYKluzrhA6avD_7iA`,
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
      <button
        className="PetFinderAPI_userLikedPet_Button"
        onClick={() => navigate("/")}
      >
        Move to User Liked pets
      </button>

      <TinderCards animals={animals} />
    </div>
  );
}
