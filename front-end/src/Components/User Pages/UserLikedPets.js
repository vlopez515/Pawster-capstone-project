import { Container, Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import LikedPet from './LikedPet'
import ViewPet from './ViewPet'
import NoPetsPage from '../../Pages/ShelterPages/NoPetsPage'


function UserLikedPets() {
    //aixos get? from our data base - getting pets data. by userlikedby 
    // save that to a state... then filter with user id? 
    //so now we have an object with only this user id's pet info. 
    const [allPets, setAllPets] = useState([])
    const [petIndx, setPetIndx] = useState(0)


    useEffect(() => {
        axios.get(`https://pawster.onrender.com/pets`)
            .then((res) => { setAllPets(res.data) })
            .catch((err) => { console.log(err) })
    }, [])

    let pets = allPets.filter(pet => pet.userliked === true)

    return (
        <div >
            {pets.length ?
                (
                    <>
                        <Typography variant="h3" textAlign='center'>
                            Your Liked Pets
                        </Typography>

                        <Container >
                            <Stack direction='row' spacing={2} sx={{ p: '5%' }}>
                                <Container sx={{ minWidth: "md" }}>
                                    {
                                        // need pets array to loop through 
                                        pets.map((pet, index) => <LikedPet key={pet.id} pet={pet} index={index} setPetIndx={setPetIndx} />)
                                    }
                                </Container>

                                <Container
                                    hidden
                                    style={{
                                        border: "solid",
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '70vh',
                                        width: '50%',
                                    }}
                                >
                                    <ViewPet petShown={pets[petIndx]} />
                                </Container>
                            </Stack>
                        </Container>
                    </>
                ) :
                <NoPetsPage />
            }
        </div >
    )
}

export default UserLikedPets