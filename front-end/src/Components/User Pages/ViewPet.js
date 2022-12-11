import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


export default function ViewPet({ petShown }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={`${petShown.name}`}
                subheader={`Breed: ${petShown.breed} - Age: ${petShown.age}`}
            />
            <CardMedia
                component="img"
                height="100"
                image={`${petShown.image_url}`}
                alt={`${petShown.name}-picture`}
            />
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
                Spayed / Neutered: {petShown.spayed_neutered ? 'Yes' : 'No'}
                <br />
                Any Special Needs: {petShown.special_needs ? 'Yes' : 'No'}
                {/* </Typography> */}
            </CardContent>
        </Card>
    );
}
