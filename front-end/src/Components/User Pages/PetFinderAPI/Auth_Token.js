import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default function Auth_Token() {
  const [accessToken, setAccessToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(); 

  useEffect(() => {
    console.log("getting token")
    axios
      .post(`${API}`, {
        client_id: `${CLIENT_ID}`,
        client_secret: `${CLIENT_SECRET}`,
        grant_type: "client_credentials",
      })
      .then((response) => {
        // console.log(response)
        // localStorage.setItem("token", response.data.access_token);
        setAccessToken(response);
        setExpiresIn(response.data.expires_in);
      })
      .catch((error) => {
        console.log(error);
        // window.location = "/";
      });
  },[]);

  useEffect(() => {
    console.log("getting new refreshKey")
    if (!expiresIn) return;
    const interval = setInterval(() => {
        axios
        .post(`${API}`, {
          client_id: `${CLIENT_ID}`,
          client_secret: `${CLIENT_SECRET}`,
          grant_type: "client_credentials",
        })
        .then((response) => {
            setAccessToken(response.data.access_token)
            setExpiresIn(response.data.expires_in);
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [expiresIn]);

  return accessToken;
}
