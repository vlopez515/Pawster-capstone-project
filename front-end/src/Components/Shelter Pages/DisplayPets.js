import { Row, Col, Container, CardGroup } from 'react-bootstrap';
import PetCard from "./PetCard";

function DisplayPets({ pets, id }) {
    console.log(id)

    return (
        <Container>
            <div className="m-4 text-center ">
                <h3>Pet Cards:</h3>
            <p>See all the cards you've created thus far!</p>
            </div>
            
            <Row >
                <CardGroup md={2} lg={4}>
                {pets.map((pet) => {
                    if (pet.shelter_id == id) {
                        return (
                            <Col key={pet.id} className="d-flex justify-content-around" >
                                <PetCard pet={pet} id={id}/>
                            </Col>
                        )
                    }
                })}
                </CardGroup>
            </Row>
        </Container>
    );

    //   );
}


export default DisplayPets