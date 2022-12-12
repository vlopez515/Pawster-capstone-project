import * as React from 'react';
import { Container } from '@mui/system'
import { Stack, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
// import Grid from '@mui/material/Grid';

import "./AboutPage.css"



export default function AboutPage() {

    const bulletPoints = [
        {
            title: "Compassion",
            para: "Our organization is dedicated to assisting those most in need; we believe in promoting empathy, love, and a sense of family, for all our neighbors, human and animal alike",
        },
        {
            title: "Community",
            para: "Our organization relies on our network of dedicated volunteers; we believe in creating long-lasting partnerships, where Service is as rewarding for those providing as those receiving"
        },
        {
            title: "Integrity",
            para: "Our organization asks that its staff, Board and volunteers conduct themselves with honesty and fairness; we believe it is our responsibility to hold ourselves to the highest standards",
        },
        {
            title: "Transparency",
            para: "Our organization strives for openness in all aspects of our operations; we believe clear and open communication engenders trust",
        },
        {
            title: "Empowerment",
            para: "Our organization protects its clients’ independence; we believe everyone deserves encouragement, assurance, and respect"
        },
        {
            title: "Leadership",
            para: "Our organization aims to be at the forefront of its field; we believe innovation leads to better services and greater advocacy"
        },
        {
            title: "Accountability",
            para: "Our organization faithfully fulfills its duties of care, loyalty and obedience; we believe in reliability and efficiency for all our stakeholders",
        }
    ]
    return (
        <div className="about-Us">   

         <img src="https://149625707.v2.pressablecdn.com/wp-content/uploads/Dog-cat-banner-img.png" alt="banner"/>

        <Stack direction='column' align="center" >
            <Container direction='row' align="center" >
            <br/>
            <br/>
            <br/>
            <br/>

                <Typography variant="h4" sx={{ color:"black" }} fontFamily={'Fraunces'} >
                    About Pawster
                </Typography>
                <br/>
                <Typography variant="body4" fontFamily={'Fraunces'} spacing={3}>
                    Pawster provides a platform for users and shelters to makes it easy to foster and adopt. Swipe through the selection of both dogs and cats up for adoption from thousands of shelters and rescue groups. Our platform automatically filters all pets available near you. Sign up now and find the perfect pet for you.
                </Typography>
            </Container>
            <br/>

            <Container direction="row" align="center">
                <Typography variant="h4"  sx={{ color:"black" }} fontFamily={'Fraunces'} >
                    Our Core Values
                </Typography>
                <Typography variant="body4" fontFamily={'Fraunces'} >
                    PAWS NY approaches all of its programs with a set of defining values that shape our policies and guide our actions. The core values of PAWS NY are:
                </Typography>
            </Container >
             

            <div className="listed-Values">
                {bulletPoints.map((val, idx) => PetValues(val, idx))}
            </div>

        </Stack>
        </div>
    )
}


function PetValues(values, i) {
    return (
        <>
            <Stack
                direction='row'
                // spacing={5}
            // align="center"
            // justifyContent="center"
            >
                <PetsIcon /> {" "}{values.title} - {values.para}
            </Stack>
            <br />

        </>
    );

}

