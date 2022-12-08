// import { Row, Col, Container } from 'react-bootstrap';
// import PetCard from "./PetCard";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Stack } from "@mui/system";
import { CardContent, CardActions, Card, Collapse } from "@mui/material";
import { useState } from "react";



// const createPetCard = (pet) => {

//     const array = [{ _id: "1" }, { _id: "2" }, { _id: "3" }];


//     const [expandedId, setExpandedId] = useState(-1);
//     const handleExpandClick = (i) => {
//         setExpandedId(expandedId === i ? -1 : i);
//       };

//     return (
        
//         {/* <Typography variant='body2' align='center' >
//             <h2>{pet.name}</h2>
//             <Link href={card.linkedin} rel="noopener noreferrer" target="_blank">
//                 <LinkedInIcon />
//             </Link>
//             {"  "}
//             <Link href={card.github} rel="noopener noreferrer" target="_blank">
//                 <GitHubIcon />
//             </Link>
//             {"  "}
//             <Link href={card.email} rel="noopener noreferrer" target="_blank">
//                 <EmailIcon />
//             </Link>
//         </Typography> */}
 
//     )
// }

function DisplayPets({ pets, shelterId }) {
    console.log(pets, shelterId)
    return (
 
        { 
            
        }
    //     <Stack>
    //         <Card sx={{ maxWidth: 200 }}>
    //     <img 
    //     src={pet.photo ?
    //           pet.photo :
    //           'https://peoplewithpets.com/wp-content/uploads/2019/06/people-with-Pet-no-floorplan-image.jpg'} 
    //     className="profileCard-Img" >
    //     </img>
    //     <CardActions disableSpacing>
    //     <IconButton
    //           onClick={() => handleExpandClick(i)}
    //           aria-expanded={expandedId === i}
    //           aria-label="show more"
    //         >
    //           <ExpandMoreIcon />
    //         </IconButton>
    //       </CardActions>
    //       <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
    //         <CardContent>
    //           <div>ActivitiesList</div>
    //         </CardContent>
    //       </Collapse>
    //     {/* <Typography variant='body2' align='center' >
    //         <h2>{pet.name}</h2>
    //         <Link href={card.linkedin} rel="noopener noreferrer" target="_blank">
    //             <LinkedInIcon />
    //         </Link>
    //         {"  "}
    //         <Link href={card.github} rel="noopener noreferrer" target="_blank">
    //             <GitHubIcon />
    //         </Link>
    //         {"  "}
    //         <Link href={card.email} rel="noopener noreferrer" target="_blank">
    //             <EmailIcon />
    //         </Link>
    //     </Typography> */}
    // </Card>

    //     </Stack>
        // // <Container>
        //     {filteredPets.length ?
        //         (
        //         <>
        //             <div className="m-4 text-center">
        //             <h3>Pet Cards:</h3>
        //             <p>See all the cards you've created thus far!</p>
        //         </div>
        //             {/* <Row xs={1} md={2} lg={3} xl={3} >
        //                     {filteredPets.map((pet) => {
        //                         return (
        //                             <Col key={pet.id} className="d-flex justify-content-around pet-Col" >
        //                                 <PetCard pet={pet} id={id} />
        //                             </Col>
        //                         )
        //                     })}
        //             </Row> */}
        //         </>
        //         )
        //         :
        //         (
        //             <div className='m-5 p-5'>
        //                 <h4 className='text-center'> No Pets Found. Add Some! </h4>
        //                 <pre>{`
    
        //                          |\\_/|                  
        //                          | @ @   Woof! 
        //                          |   <>              _                 ／l、
        //                          |  _/\\------____ ((| |))            （°､ ｡ ７          
        //                          |               \\--' |                |  ~ \\         
        //                      ____|_       ___|   |___.'                l     \\
        //                     /_/_____/____/_______|                      じしf_,)ノ `
        //                 }
        //                 </pre>
                        
        //             </div>

        //         )
        //     }

        // </Container>
    );

    //   );
}


export default DisplayPets