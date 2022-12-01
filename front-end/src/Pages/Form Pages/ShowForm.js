import React from 'react'
import PetForm from '../../Components/newPetForm/PetForm';
import ShelterForm from '../../Components/newShelterForm/ShelterForm';
import UserForm from '../../Components/newUserForm/UserForm'

function ShowForm() {
  return (
    <div>
        <PetForm/>
        <ShelterForm/>
        <UserForm/>
    </div>
  )
}

export default ShowForm