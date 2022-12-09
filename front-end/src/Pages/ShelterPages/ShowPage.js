import React from 'react';
import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Pet from './Pet';
import LikedUsers from './LikedUsers';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function ShowPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        await axios.get(`https://pawster.onrender.com/users`).then((res) => {
          const data = res.data
          console.log(data)
          setUsers(data)
        }).catch((c) => console.warn("catch", c));
    }


  return (
    <>
        <Stack direction='row' spacing={2}  sx={{ p: '5%', height: "100vh" }}>
      <Container >
            <Typography variant={'h3'} align="center">Pet</Typography>
            <Pet/>
        </Container>

        <Container align="center">
            <Typography variant={'h3'}>Liked Users</Typography>
            <Stack direction='row'> 

                {
                    users? (users.map(user =>  <LikedUsers user={user}/>)) : null

                }
               
            </Stack>
            
        </Container>
        
      </Stack>
    </>
  )
}

