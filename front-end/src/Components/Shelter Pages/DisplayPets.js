import { Row, Col, Container, CardGroup } from 'react-bootstrap';
import PetCard from "./PetCard";

function DisplayPets({ pets, id }) {
    let filteredPets = pets.filter(pet => pet.shelter_id == id)

    return (
        <Container>
            {filteredPets.length ?
                (
                <>
                    <div className="m-4 text-center ">
                    <h3>Pet Cards:</h3>
                    <p>See all the cards you've created thus far!</p>
                </div>
                    <Row >
                        <CardGroup md={2} lg={4}>
                            {filteredPets.map((pet) => {
                                return (
                                    <Col key={pet.id} className="d-flex justify-content-around" >
                                        <PetCard pet={pet} id={id} />
                                    </Col>
                                )
                            })}
                        </CardGroup>
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