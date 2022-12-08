import React, { useEffect } from 'react';
import axios from 'axios';
import DisplayPets from './DisplayPets';
import { useParams, useState } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function HomeScreen({ pets }) {
  const { id } = useParams()

  // console.log( id, pets)
  
  // useEffect(() => {
  //   filteredPets()
  // }), []
  // const filteredPets = () => {
  //   let data = pets.map(pet => pet.shelter_id  === id)
  //   console.log(data)
  // }
  
  // console.log(filteredPets)

  return (
    <>
      <h1>Welcome Back, SHELTER NAME</h1>
        
        <DisplayPets pets={[...pets]} shelterId={id} />
    </>
  )
}

export default HomeScreen