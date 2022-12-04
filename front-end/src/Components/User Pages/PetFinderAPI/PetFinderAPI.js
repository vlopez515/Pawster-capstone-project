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
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrazBKSHFqalhYTkI4V25tWWo5VFZZbFBiSWJoNlFiMlZiRW1nbXJ6eUYxd0pHaE5kRSIsImp0aSI6IjI5YzJlYzc2MTk4MTY0MTc4ZTM4MWQ2MTBmMjc2ZDZhOTgwODhkMGVlYTIxYmVjMTU0YjA3NTkyNTcxZTFlOWY1Y2RjMTYyZDk5ZWNlYmIyIiwiaWF0IjoxNjcwMTg0ODczLCJuYmYiOjE2NzAxODQ4NzMsImV4cCI6MTY3MDE4ODQ3Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.VldgK00lKQ_2VMrB282BMQgRTz8EQhjU742mdNju3K8zpY6BkVaHenVHhT7wqreJHP9hzHw0PyfL_lnEhdSojpA1F_zduvi9fFQRLyGsGRdqS6CjNX4BDj-TdkNKP2LabQdDGVBW97gme88TYPj4bZ_l5QPQ4ibJDgoMUpj0FABszk5qgO4B4PRNR8KaN00S6bR9dafbgOMhQcZUWZ-dxZy-o1K3lRa8tImF6BjuwaFk61olVAl45yUfUpM3ypbM5mJ517gQ02veTVBSVanoc3_nvq2QentEd5CKBWda7Vm9bDMZw1fOtgH3p4t46_jhzff5b_0Rgq9R_s91BTaJzw`,
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
