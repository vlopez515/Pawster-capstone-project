import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import './ViewPet.css'

import CardContent from '@mui/material/CardContent';


export default function ViewPet({ petShown }) {
    console.log(petShown)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={`${petShown.name}`}
                subheader={`Breed: ${petShown.breed} - Age: ${petShown.age}`}
            />
            <div className='petShown-pic-container'>
            <img
                className='petShow-pic'
                src={`${petShown.image_url}`}
                alt={`${petShown.name}-pic`}
            />
            </div>
            <CardContent>
                {/* <Typography variant="content" color="text.secondary"> */}
                Description: {petShown.description ? petShown.description : 'none provided'}
                <br />
                Gender: {petShown.gender}
                <br />
                Color: {petShown.color}
                <br />
                House Trained: {petShown.house_trained ? 'Yes' : 'No'}
                <br />
                Any Special Needs: {petShown.special_needs ? 'Yes' : 'No'}
                <br/>
                Shelter PH#: {petShown.phone_number}
                {/* </Typography> */}
            </CardContent>
        </Card>
    );
}
