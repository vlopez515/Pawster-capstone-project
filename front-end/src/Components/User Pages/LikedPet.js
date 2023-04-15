import React from 'react';
import { Avatar, Stack, Typography, Divider, Button } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import "./LikedPet.css"



export default function LikedPet({ pet, index, setPetIndx, petIndx}) {

    const thankYouMessages = [`Thank you for expressing interest in ${pet.name}! We will be reviewing your application and reaching out for the next steps...`, `${pet.name} is super excited to meet you! We will be reviewing your application before setting a date for you two to meet..`, `We appreciate your interest in ${pet.name}, but we're excited to share he's found his forever home.`, `Thank you for swiping right on ${pet.name}!`, `We look forward to meeting you for an in person interview to make sure you're ready to be a foster parent to your fur pal.`]


    const isSelected = index === petIndx;

    return (
        <>
            <Stack onClick={()=> setPetIndx(index)} className={isSelected ? "likedPet likedPet--selected" : "likedPet"} direction='row' spacing={2}  >
                {/* Pet Picture */}
                <div>
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
                        <div className="likedPet__title">
                            {pet.name}
                        </div>
                    </Stack>

                    {/* Thank you message */}
                    <div className="likedPet__text">
                        {thankYouMessages[index] ? thankYouMessages[index] : "send message first!"}
                    </div>
                </Stack>

                <Divider orientation="vertical" flexItem />

                {/* Icons on the right! */}
                <div style={{ display: 'flex', justifyContent:'end' , width: '20%'}}>
                    <Button sx={{color: isSelected  ? 'white': "#6b7a8f"}} >
                        <MessageOutlinedIcon fontSize="large" />
                    </Button>   
                </div>
                
            </Stack>

            {/* Chat divider */}
            <Divider orientation="horizontal" flexItem  />
        </>
    )
}