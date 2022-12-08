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
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrazBKSHFqalhYTkI4V25tWWo5VFZZbFBiSWJoNlFiMlZiRW1nbXJ6eUYxd0pHaE5kRSIsImp0aSI6Ijk4Nzg3MjQzYTJjNjEyZmEyYjFkMWFiNWQ1NTc4ZWViMTdjNTI1YzYzMDAyNWEyOWRiM2UzNGIxYjNlMWE4ZjVjNmEzMzhiZjU1YWMzMDJmIiwiaWF0IjoxNjcwNDgxOTA0LCJuYmYiOjE2NzA0ODE5MDQsImV4cCI6MTY3MDQ4NTUwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.aaaZkmqj1v2WlWBj8is0uWssGabc1jZ9DDoNlz4tzanV7sE2NZCzp7PF5qtbUzJmWX9fz_c_tGusPMrVGDe8GXIxnWbjrTCbIJr5Zb_TPbp6fsmkwdkDPBx5dr5nD3F5UeazMw1XpIan4mZBnnmFNv0kAwKhFQIqJrA1vaGglr5IlpJUoPTN-0jumiogJCvQCmvCNC6WUmLR0ihnJcTt0zpIYU6TW11AMrrBF_5FKdy0pd7xMa2NkTqYNUFph2JEtxnAliPVLHTxsCkzgqc_0HEvtzm3UayLp7ckNn2EFeIoh50iZAN9v31Mr5HwJjRZO1sl5F8QN7wUYfhcyAkc6w`,
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
