import { Container } from '@mui/system'
import React from 'react'

function Pet({ pets, petId }) {
  const currentPet = pets[petId-1]
  
  return (
    <div>
        <Container>
            <h1>{console.log(currentPet)}</h1>
        </Container>
    </div>
  )
}

export default Pet