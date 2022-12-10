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
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrazBKSHFqalhYTkI4V25tWWo5VFZZbFBiSWJoNlFiMlZiRW1nbXJ6eUYxd0pHaE5kRSIsImp0aSI6ImRkMDVhNTA2N2RiZWU5MmNiZjM2MDlkNWZkMWZhZmIzMDM2ODA3Mjk1YzUyOGUxYzg4OTcwMjBlODIyOWZmOTlkZWQ0OTVlZGM4ZTY0MDdhIiwiaWF0IjoxNjcwNTUxOTQ3LCJuYmYiOjE2NzA1NTE5NDcsImV4cCI6MTY3MDU1NTU0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.Rr3H35rn1qYOBpxHLGhm0uLvousee2m_efAC8bNVQQdYT-zkP_6__Ok8rC6Irg_m74gYcx79yxlylemKQ4Huhb9XkCsxFu1p0CS18O8xGQN8SuzfznT3rlJFoHvEdjOeHSe7uI_NEJQdHC2Ve0tzsqcFEdfYoQPzlLgclWtNqOlhClIu0HTxEcyBHnKaDqP4KK_kiua9Uddur-pBc50rPdaeQjxDHbnjkfh_3cobQzWMMWU3btX1qtOuaihDD1ufOvKBmCZC2OAI0-epiSNhDVR8-Wk7aBoE4Xnqa76cJXERBDZHHmeMycH0Ef82El8hw8TGIgUGgP_pDSJFf4nSEA`,
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
