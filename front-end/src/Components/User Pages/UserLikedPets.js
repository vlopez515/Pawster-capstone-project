import { Container, Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import LikedPet from './LikedPet'
import ViewPet from './ViewPet'
import NoPetsPage from '../../Pages/ShelterPages/NoPetsPage'

import './UserLikedPets.css';



function UserLikedPets() {
    //aixos get? from our data base - getting pets data. by userlikedby 
    // save that to a state... then filter with user id? 
    //so now we have an object with only this user id's pet info. 
    const [allPets, setAllPets] = useState([])
    const [petIndx, setPetIndx] = useState(0)


    useEffect(() => {
        axios.get(`http://localhost:3333/pets`)
            .then((res) => { setAllPets(res.data) })
            .catch((err) => { console.log(err) })
    }, [])

    let pets = allPets.filter(pet => pet.userliked === true)

    return (
        <div className="userLikedPets" >
            {pets.length ?
                (
                    <>
                        <Typography variant="h3" textAlign='center'>
                            Your Liked Pets
                        </Typography>

                        <Container>
                            <Stack  direction='row' spacing={2}>
                                <div >
                                    <br/>
                                    <br/>
                                    {
                                        // need pets array to loop through 
                                        pets.map((pet, index) => <LikedPet  key={pet.id} pet={pet} index={index}  petIndx={petIndx} setPetIndx={setPetIndx} />)
                                    }
                                </div>

                                <div>
                                    <br/>
                                    <ViewPet petShown={pets[petIndx]} />
                                </div>
                            </Stack>
                        </Container>
                    </>
                ) :
                <Container align="center" sx={{ p: "5%" }}>
                    <br/>
                    <br/>
                <NoPetsPage />
                </Container>
            }
        </div >
    )
}

export default UserLikedPets