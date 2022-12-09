import React from 'react';
import DisplayPets from "./DisplayPets"
import { useParams } from "react-router-dom";
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import NoPetsPage from './NoPetsPage';


function HomeScreen({ pets, shelterInfo }) {
  const { id } = useParams()
  let data = [];
  let shelterDets;

  const filteredPetsAndShelter = () => {
    data = pets.filter(pet => pet.shelter_id === Number(id));
    shelterDets = shelterInfo.filter(shelter => shelter.id === Number(id));
  }

  filteredPetsAndShelter()
  let shelterName = { ...shelterDets[0] }
  return (
    <Container align="center">
      <br />
      <div>
        <h1>Welcome Back, {shelterName['name']}</h1>
      </div>
      <br />
      <br />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {data.length ?
          (data.map((pet, i) => <DisplayPets pet={pet} index={i} />))
          :
          (
            <Container align="center" sx={{ p: "5%" }}>
              <NoPetsPage />
            </Container>
          )

        }
      </Grid>
      <br />
      <div>
        <Button variant="contained" href={`/shelter/${id}/new`} style={{
          border: "solid",
          padding: "15px",
          fontSize: "12px",
        }}>Add New Pet</Button>      </div>

    </Container>
  )
}

export default HomeScreen