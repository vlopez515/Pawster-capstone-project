import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PetCard({ pet, id }) {
  console.log(pet)
  return (
    <>
      <div className='w-auto show-PetCard'>
        <div className="show-petImg">
          <img
          alt="petImg"
          variant="top"
          src={
            pet.photo ?
              pet.photo :
              'https://peoplewithpets.com/wp-content/uploads/2019/06/people-with-Pet-no-floorplan-image.jpg'
          } />
        </div>
        
        <div className='text-center'>
          <h3>{pet.name}</h3>
          <p>{pet.description ? pet.description : 'No Description Avaiable'}</p>
        </div>
        <div className='d-flex justify-content-evenly'>
            

            <Button
            ><a href={`/shelter/${id}/show/${pet.id}`}>show more</a>
              
            </Button>
          </div>
      </div>
    </>
  )
}

export default PetCard