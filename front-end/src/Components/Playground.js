import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'

import { Typography, Card } from '@mui/material'
import LikedPet from './User Pages/LikedPet'
import ShowPet from '../Components/ShowPet'


const pets = [
    {
        "id": 1,
        "name": "Cedar",
        "type": "Cat",
        "breed": "Domestic Short Hair",
        "size": "Small",
        "gender": "Male",
        "age": "Baby",
        "color": "Gray / Blue / Silver",
        "maintenance_level": "Low",
        "spayed_neutered": true,
        "house_trained": false,
        "declawed": false,
        "special_needs": false,
        "shots_current": true,
        "description": null,
        "status": "adoptable",
        "shelter_id": 1
    },
    {
        "id": 2,
        "name": "ChiChi",
        "type": "Dog",
        "breed": "Mixed Breed",
        "size": "Small",
        "gender": "Female",
        "age": "Adult",
        "color": "Brown / Chocolate",
        "maintenance_level": "Mid",
        "spayed_neutered": true,
        "house_trained": false,
        "declawed": null,
        "special_needs": false,
        "shots_current": true,
        "description": "At first glance, I might appear to have a ruff, set in my ways exterior but once you give me...",
        "status": "adoptable",
        "shelter_id": 2
    },
    {
        "id": 3,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 4,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 5,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 6,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 7,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 8,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 9,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    },
    {
        "id": 10,
        "name": "Dottie",
        "type": "Cat",
        "breed": "Domestic Short Hair",
        "size": "Medium",
        "gender": "Female",
        "age": "Adult",
        "color": "Black",
        "maintenance_level": null,
        "spayed_neutered": false,
        "house_trained": false,
        "declawed": false,
        "special_needs": false,
        "shots_current": true,
        "description": "null",
        "status": "adoptable",
        "shelter_id": 2
    },
    {
        "id": 11,
        "name": "",
        "type": "",
        "breed": "",
        "size": "",
        "gender": "",
        "age": "",
        "color": "",
        "maintenance_level": "",
        "spayed_neutered": null,
        "house_trained": null,
        "declawed": null,
        "special_needs": null,
        "shots_current": null,
        "description": null,
        "status": null,
        "shelter_id": 2
    }
]

function Playground() {
    const [petIndx, setPetIndx] = useState(0)

    return (
        <div>
            <Typography variant="h3" textAlign='center'>
                Your Liked Pets
            </Typography>

            <Container >
                <Stack direction='row' spacing={2} sx={{ p: '5%' }}>
                    <Container minWidth="md">
                        {
                            pets.map((pet, index) => <LikedPet pet={pet} index={index} setPetIndx={setPetIndx} />)
                        }
                    </Container>

                    <Container
                        hidden
                        style={{
                            border: "solid",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            width: '50%',
                        }}
                    >
                        <ShowPet petShown={pets[petIndx]} />
                    </Container>
                </Stack>
            </Container>
        </div >
    )
}

export default Playground