import { Container, Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import LikedPet from './LikedPet'
import ViewPet from './ViewPet'
import NoPetsPage from '../../Pages/ShelterPages/NoPetsPage'
import ChatScreen from './ChatScreen';


function UserLikedPets() {
    //aixos get? from our data base - getting pets data. by userlikedby 
    // save that to a state... then filter with user id? 
    //so now we have an object with only this user id's pet info. 
    const [allPets, setAllPets] = useState([])
    const [petIndx, setPetIndx] = useState(0)
    const [showPetCard, setCardShow] = useState(true);
    const [allMessages, setAllMessages] = useState([])
    const [onlyPetMsg, setPetMsg] = useState([])


    useEffect(() => {
        getMessages();
        
        axios.get(`https://pawster.onrender.com/pets`)
            .then((res) => { setAllPets(res.data) })
            .catch((err) => { console.log(err) })
    }, [])
    
        const getMessages = () => {
        axios.get(`http://localhost:2345/messages`).then((res) => {
            const data = res.data
            const sortedData = data.sort((a, b) => a.petid - b.petid)
            setAllMessages(sortedData)
        }).catch((c) => console.warn("catch", c));
    }
    
       
    let pets = allPets.filter(pet => pet.userliked === true)
    
    let sorted = allMessages.filter(item => Number(item.petid) === petIndx)

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
                                <div >
                                    <br/>
                                    <br/>
                                    {
                                        // need pets array to loop through 
                                        pets.map((pet, index) => <LikedPet key={pet.id} pet={pet} index={index} setPetIndx={setPetIndx} setCardShow={setCardShow} />)
                                    }
                                </div>

                                <div>
                                    <br/>
                                    {
                                    !!showPetCard ? (
                                        <ViewPet petShown={pets[petIndx]} />
                                    ) :
                                    (
                                      <ChatScreen sorted={sorted}/> 
                                    )
                                     }
                                    
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
