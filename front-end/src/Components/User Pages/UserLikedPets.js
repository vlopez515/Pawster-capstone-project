import { Container, Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import LikedPet from './LikedPet'
import ViewPet from './ViewPet'
import NoPetsPage from '../../Pages/ShelterPages/NoPetsPage'

import './UserLikedPets.css';


const API = process.env.REACT_APP_API_URL

function UserLikedPets() {
    const [allPets, setAllPets] = useState([])
    const [petIndx, setPetIndx] = useState(0)


    useEffect(() => {
        axios.get(`${API}`)
            .then((res) => { setAllPets(res.data) })
            .catch((err) => { console.log(err) })
    }, [])

    // let pets = allPets.filter(pet => pet.userliked === true)

    return (
        <div className="userLikedPets" >
            {pets.length ?
                (
                    <>
                        <Container>
                            <Stack  direction='row' spacing={2}>
                                <div >
                                    <br/>
                                    <br/>
                                    {
                                        
                                        pets.map((pet, index) => <LikedPet  key={pet.id} pet={pet} index={index}  petIndx={petIndx} setPetIndx={setPetIndx} />)
                                    }
                                </div>

                                <div>
                                    <br/>
                                    {/* <ViewPet petShown={pets[petIndx]} /> */}
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