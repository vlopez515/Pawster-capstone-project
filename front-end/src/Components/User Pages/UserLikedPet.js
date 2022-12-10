import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'

import { Typography } from '@mui/material'
import LikedPet from './User Pages/LikedPet'
import ViewPet from './User Pages/ViewPet'


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
                            // need pets array to loop through 
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
                        <ViewPet petShown={pets[petIndx]} />
                    </Container>
                </Stack>
            </Container>
        </div >
    )
}

export default Playground