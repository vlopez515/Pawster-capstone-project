import { Row, Col, Container } from 'react-bootstrap';
import PetCard from "./PetCard";

function DisplayPets({ pets, id }) {
    let filteredPets = pets.filter(pet => pet.shelter_id == id)

    return (
        <Container>
            {filteredPets.length ?
                (
                <>
                    <div className="m-4 text-center">
                    <h3>Pet Cards:</h3>
                    <p>See all the cards you've created thus far!</p>
                </div>
                    <Row xs={1} md={2} lg={3} xl={3} >
                            {filteredPets.map((pet) => {
                                return (
                                    <Col key={pet.id} className="d-flex justify-content-around pet-Col" >
                                        <PetCard pet={pet} id={id} />
                                    </Col>
                                )
                            })}
                    </Row>
                </>
                )
                :
                (
                    <div className='m-5 p-5'>
                        <h4 className='text-center'> No Pets Found. Add Some! </h4>
                        <pre>{`
    
                                 |\\_/|                  
                                 | @ @   Woof! 
                                 |   <>              _                 ／l、
                                 |  _/\\------____ ((| |))            （°､ ｡ ７          
                                 |               \\--' |                |  ~ \\         
                             ____|_       ___|   |___.'                l     \\
                            /_/_____/____/_______|                      じしf_,)ノ `
                        }
                        </pre>
                        
                    </div>

                )
            }

        </Container>
    );

    //   );
}


export default DisplayPets