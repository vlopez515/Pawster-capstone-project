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
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrazBKSHFqalhYTkI4V25tWWo5VFZZbFBiSWJoNlFiMlZiRW1nbXJ6eUYxd0pHaE5kRSIsImp0aSI6IjI3MmI4MTViY2M3NTE2YzMwZjBlOGU5MmZiOTRhNzhhY2NlYjJiMDk2MTE2MTQzMzRmMWY4ZDg4YzM4MjRkMzdhODhkNGIxNTNlOGRjM2Q4IiwiaWF0IjoxNjcwNTQzODMxLCJuYmYiOjE2NzA1NDM4MzEsImV4cCI6MTY3MDU0NzQzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ElfTNaXql2i9i_60IkWt3lpQr6x92BN8cz0_CtG2qKr5KkGf8exQsG01O-0c4q9cqTF9WQ592HEGLfEqUxtem0neeVSKRZp4XlPbDqIsE6D0s6aHFMGyVh4fBn2_ASsCC_wAiYv7U4A79aGLBBo89DFJmFS2VyuHiAvUpY3PhBrC5FCoXIJBts3IAhedYfiaWIHxgwrgacHzMqpISV0i6antofegjRKdUgGeYqZI_fW3g7KgMuGAMjb-c5mzXC_SvpkvOXNJJVvjwQZdfOc9wFJQ06A9jST5HermnSiqCWp9RV4p4-aEvXFTnb76i7JCb5al2tBU9Kl25bqXqhMGPg`,
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
