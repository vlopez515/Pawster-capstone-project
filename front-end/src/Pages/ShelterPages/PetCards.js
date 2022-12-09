import React from 'react';
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { CardActions, Card, Button, Collapse, CardContent, List, ListItem, ListItemText } from "@mui/material";

export default function PetCards({ pet, index, id }) {
    const [expandedId, setExpandedId] = useState(-1);

    const handleExpandClick = index => {
        setExpandedId(expandedId === index ? -1 : index);
    };

    return (
        <>
            <Card sx={{ maxWidth: 300 }} key={index + 1}>
                {/* Image */}
                <img
                    src={pet.photo ?
                        pet.photo :
                        'https://peoplewithpets.com/wp-content/uploads/2019/06/people-with-Pet-no-floorplan-image.jpg'}
                    className="profileCard-Img" >
                </img>
                {/* Name */}
                {pet.status === "adoptable" ?
                    (
                        <h3>{pet.name} {" "} ({pet.age})
                            <br />
                            <Button variant="contained" style={{
                                backgroundColor: "#D3D3D3",
                                padding: "0 30px 0 30px",
                                fontSize: "12px",
                                textTransform: "unset"

                            }}>{pet.status}</Button></h3>
                    ) :
                    <h4>{pet.name}</h4>
                }
                <CardActions disableSpacing>
                    <IconButton
                        onClick={() => handleExpandClick(index)}
                        aria-expanded={expandedId === index}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                {/* Collapsable Info  */}
                <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                    <CardContent>
                        <List>
                            <ListItem divider={true}><ListItemText fontSize="small">Breed: {pet.breed}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Color: {pet.color}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Description: {pet.description ? pet.description : "no description provided"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Gender: {pet.gender}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Declawed: {pet.declawed ? pet.declawed : "N/A"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">House Trained: {pet.house_trained ? "Yes" : "No"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Maintenance Level: {pet.maintenance_level ? pet.maintenance_level : "Not specified"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Shots Up to Date: {pet.shot_current ? "Yes" : "No"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Size: {pet.size}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Spayed / Neutered: {pet.spayed_neutered ? "Yes" : "No"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Special Needs: {pet.special_needs ? "Yes" : "No"}</ListItemText></ListItem>
                            <ListItem divider={true}><ListItemText fontSize="small">Type: {pet.type}</ListItemText></ListItem>
                        </List>
                        <div>

                            <Button variant="contained" href={`${id}/edit/${pet.id}`} style={{
                                margin: 3,
                                border: "solid",
                                padding: "0 15px 0 15px",
                                fontSize: "12px",
                            }}>Edit</Button>
                            
                            <Button variant="contained" href={`${id}/show/${pet.id}`} style={{
                                margin: 3,
                                border: "solid",
                                padding: "0 15px 0 15px",
                                fontSize: "12px",
                            }}>Likes</Button>
                        </div>
                    </CardContent>
                </Collapse>

            </Card>
        </>
    )
}

