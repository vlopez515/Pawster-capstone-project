import React from 'react';
import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Pet from './Pet';
import LikedUsers from './LikedUsers';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ShowPage({ pets, usersData }) {
    const { petId } = useParams()

  console.log(usersData)

    

  return (
    <>
        <Stack direction='row' spacing={2}  sx={{ p: '5%', height: "100vh" }}>
      <Container >
            <Typography variant={'h3'} align="center">Pet</Typography>
            <Pet pets={pets} petId={petId}/>
        </Container>

        <Container align="center">
            <Typography variant={'h3'}>Liked Users</Typography>
            <Stack direction='row' spacing={1} > 
                {/* {
                  users? (users.map(user =>  <LikedUsers user={user}/>)) : null
                }  */}
            </Stack>
            
        </Container>
        
      </Stack>
    </>
  )
}

