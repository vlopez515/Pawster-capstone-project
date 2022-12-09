import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import Button from '../Components/Forms/controls/Button'


export default function UserOrShelter() {

  return (
    <>
      <Stack direction='row' spacing={2}  sx={{ p: '5%', height: "100vh" }}>
      <Container sx={{ margin: "auto" }}>
          <Button 
          variant="outlined"   
          href={`/shelter`}        
          style={{
            border: "solid",
            // border: "none",
            padding: "50%",
            fontSize: "12px",
            
          }}>
            <Typography variant={'h1'} >User</Typography>
          </Button>
        </Container>

        <Container sx={{ margin: "auto" }}>
          <Button 
          variant="outlined"   
          href={`/shelter`}        
          style={{
            border: "solid",
            // border: "none",
            padding: "50%",
            fontSize: "12px",
            
          }}>
            <Typography variant={'h1'} >User</Typography>
          </Button>
        </Container>
        
      </Stack>

    </>
  )
}
