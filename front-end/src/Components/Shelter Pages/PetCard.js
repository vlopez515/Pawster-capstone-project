import React, { useState } from 'react';
import { Card, ListGroup, Button, Collapse } from 'react-bootstrap';

function PetCard({ pet, id }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="align-items-center" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={
            pet.photo ?
              pet.photo :
              'https://peoplewithpets.com/wp-content/uploads/2019/06/people-with-Pet-no-floorplan-image.jpg'
          } />
        <Card.Body>
          <Card.Title className='text-center'>{pet.name}</Card.Title>
          <Card.Text className='text-center'>
            {pet.description ? pet.description : 'No Description Avaiable'}
          </Card.Text>
          <div className='d-flex justify-content-evenly'>
            <Button
              onClick={() => {
                setOpen(!open);
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open}>
              {open ? 'hide' : 'show'}
            </Button>
            
            <Button
            ><a href={`/shelter/${id}/edit/${pet.id}`}>edit</a>
              
            </Button>
          </div>

          <Collapse in={open}>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Age: {pet.age}</ListGroup.Item>
              <ListGroup.Item>Breed: {pet.breed}</ListGroup.Item>
              <ListGroup.Item>Gender: {pet.gender}</ListGroup.Item>
              <ListGroup.Item>Size: {pet.size}</ListGroup.Item>
              <ListGroup.Item>Color: {pet.color}</ListGroup.Item>
              <ListGroup.Item>Spayed/Neutered: {pet.spayed_neutered}</ListGroup.Item>
              <ListGroup.Item>Declawed: {pet.declawed ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item>House Trained: {pet.house_trained ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item>Special Needs: {pet.special_needs ? 'No' : 'Yes'}</ListGroup.Item>
              <ListGroup.Item>Shots Up To Date: {pet.shots_current ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item>Status: {pet.status}</ListGroup.Item>
            </ListGroup>

          </Collapse>

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  )
}

export default PetCard