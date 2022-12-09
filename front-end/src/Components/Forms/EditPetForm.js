import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { Stack, Typography } from '@mui/material';
import Controls from './controls/Controls';
import {  Form } from './Form.js';
import { useNavigate } from 'react-router-dom';

import { getPetType, getPetSize, getPetMaintenance, getPetAge, getGenderItems, getYesOrNo, getDeclawedItems, getAdoptionStatus } from "./selectValues/petsSelect"

function EditPetForm() {
    const { id, petId } = useParams();
    const navigate = useNavigate();

    const [petInfo, setPetInfo] = useState({
        name: "",
        breed: "",
        gender: "",
        age: "",
        color: "",
        size: "",
        type: '',
        maintenance_level: '',
        spayed_neutered: null,
        house_trained: null,
        description: null,
        declawed: null,
        special_needs: null,
        shots_current: null,
        status: null,
        shelter_id: id,
    });

    useEffect(()=>{
        axios.get(`https://pawster.onrender.com/pets/${petId}`).then(
            (response) => {
                setPetInfo(response.data);
            },
            (error) => navigate(`*`)
        );
    }, [petId, navigate]);


    const updatePetInfo = async (updatedPet, petId) => {
      await axios.post(`https://pawster.onrender.com/pets/${petId}`, updatedPet).then((res) => {
        const data = res.data
        console.log(data)
       navigate(`/shelter/${id}`);
      }, 
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setPetInfo({ ...petInfo, [name]:value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(petInfo)
        updatePetInfo(petInfo, petId);
    };

    return (
        <>
        <Form onSubmit={handleSubmit}>

            <Typography variant="h4" align="center" sx={{ pt: 3, fontWeight: "bold" }}>Edit: {petInfo.name}'s Card</Typography>
            <Stack
                direction="column"
                alignItems="center"
                sx={{ py: 4 }}
            >
                <Grid item xs={6}>
                    <Controls.Input
                        name="name"
                        label="Pet's Name"
                        value={petInfo.name}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Breed"
                        name="breed"
                        value={petInfo.breed}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Color"
                        name="color"
                        value={petInfo.color}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Description"
                        name="description"
                        value={petInfo.description}
                        onChange={handleInputChange}
                    />
                    <Controls.RadioGroup
                        name="status"
                        label="Are they up for adoption?"
                        value={petInfo.status}
                        onChange={handleInputChange}
                        items={getAdoptionStatus}
                    />
                    <Controls.RadioGroup
                        name="type"
                        label="Type of Pet"
                        value={petInfo.type}
                        onChange={handleInputChange}
                        items={getPetType}
                    />
                    <Controls.RadioGroup
                        name="size"
                        label="Pet Size"
                        value={petInfo.size}
                        onChange={handleInputChange}
                        items={getPetSize}
                    />
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={petInfo.gender}
                        onChange={handleInputChange}
                        items={getGenderItems}
                    />
                    <Controls.Select
                        name="maintenance_level"
                        label="Pet Maintenance Level"
                        value={petInfo.maintenance_level}
                        onChange={handleInputChange}
                        options={getPetMaintenance}
                    />
                    <Controls.Select
                        name="age"
                        label="Pet's Age"
                        value={petInfo.age}
                        onChange={handleInputChange}
                        options={getPetAge}
                    />


                    <Controls.Select
                        name="spayed_neutered"
                        label="Has the pet been spayed / neutered?"
                        value={petInfo.spayed_neutered}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />

                    <Controls.Select
                        name="house_trained"
                        label="Is the Pet House Trained?"
                        value={petInfo.house_trained}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />
                    <Controls.Select
                        name="declawed"
                        label="Has the pet been declawed?"
                        value={petInfo.declawed}
                        onChange={handleInputChange}
                        options={getDeclawedItems}
                    />
                    <Controls.Select
                        name="special_needs"
                        label="Does the pet have special needs?"
                        value={petInfo.special_needs}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />
                    <Controls.Select
                        name="shots_current"
                        label="Are they up to date with their shots?"
                        value={petInfo.shots_current}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />
                </Grid>
                <div>
                    <Controls.Button
                        type="submit"
                        text="Submit"
                        color="default"
                        textColor="black" />
                     <Controls.Button
                        text="Nevermind!"
                        color="default"
                        href={`/shelter/${id}`}
                        />
                </div>

            </Stack>
        </Form>
        </>
    )
}

export default EditPetForm