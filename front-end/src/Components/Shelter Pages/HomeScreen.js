import React from 'react';
import DisplayPets from './DisplayPets';
import { useParams } from "react-router-dom";

function HomeScreen({ pets }) {
    let { id } = useParams();
    console.log(id)
  return (
    <>
        <DisplayPets pets={pets} id={id}/>
    </>
  )
}

export default HomeScreen