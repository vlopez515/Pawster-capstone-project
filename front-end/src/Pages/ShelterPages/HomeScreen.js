import React from 'react';
import DisplayPets from "./DisplayPets"

import { useParams } from "react-router-dom";
import { Container } from '@mui/system';
import {Grid} from '@mui/material';


function HomeScreen({ pets }) {
  const { id } = useParams()
  let data = []

  const filteredPets = () => {
    return data = pets.filter(pet => pet.shelter_id === Number(id)) 
  }

  filteredPets()

  return (
    <Container align="center">
      <br/>
    <div>
      <h1>Welcome Back, SHELTER NAME</h1>
    </div>
    <br/>
    <br/>
        <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {data.map((pet, i) => <DisplayPets pet={pet} index={i} />)}
        </Grid>
        

    </Container>
  )
}

export default HomeScreen