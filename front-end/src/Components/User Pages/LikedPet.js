import React from 'react';
import { Avatar, Stack, Typography, Divider, Button } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function LikedPet({ pet, index, setPetIndx , setCardShow}) {

    const thankYouMessages = [`Thank you for expressing interest in ${pet.name}! We will be reviewing your application and reaching out for the next steps...`, `${pet.name} is super excited to meet you! We will be reviewing your application before setting a date for you two to meet..`, `We appreciate your interest in ${pet.name}, but we're excited to share he's found his forever home.`, `Thank you for swiping right on ${pet.name}!`, `We look forward to meeting you for an in person interview to make sure you're ready to be a foster parent to your fur pal.`]

    const handleDivOnClick = () => {
        setPetIndx(index);
        setCardShow(!showPetCard)
    }

    return (
        <>
            <Stack direction='row' spacing={2}  >
                {/* Pet Picture */}
                <div >
                    <Avatar
                        sx={{ width: 56, height: 56 , m:1}}
                        alt={`${pet.name}-${index}`}
                        src={pet.image_url ?
                            pet.image_url :
                            'https://peoplewithpets.com/wp-content/uploads/2019/06/people-with-Pet-no-floorplan-image.jpg'}
                    />
                </div>

                {/* Pet Name and Message Container */}
                <Stack direction='column' width='60%'>
                    {/* Name and Date generator */}
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                        <Typography variant='subtitle1' sx={{ align: "left", color: "black", width: '100$', fontFamily: 'Fraunces'}}>{pet.name}</Typography>
                    </Stack>

                    {/* Thank you message */}
                    <Typography variant='caption' sx={{ fontSize: 10, color: '#A0A0A0'  }}>
                        {thankYouMessages[index] ? thankYouMessages[index] : "send message first!"}
                    </Typography>
                </Stack>

                <Divider orientation="vertical" flexItem />

                {/* Icons on the right! */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly' , width: '20%'}}>
                    <ChatIcon />
                    <Button onClick={()=> handleDivOnClick()}>
                        <KeyboardDoubleArrowRightIcon />
                    </Button>   
                </div>
                
            </Stack>

            {/* Chat divider */}
            <Divider orientation="horizontal" flexItem  />
        </>
    )
}
