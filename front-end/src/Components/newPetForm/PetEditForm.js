import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap/';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

function PetEditForm() {
    let { id, petId } = useParams();
    const navigate = useNavigate()

    const [petInfo, setPetInfo] = useState({
        name: "",
        breed: "",
        gender: "",
        age: "",
        color: "",
        size: "",
        type: '',
        maintenance_level: '',
        spayed_neutered: null,
        house_trained: null,
        description: null,
        declawed: null,
        special_needs: null,
        shots_current: null,
        status: null,
        shelter_id: id,
    });

    useEffect(() => {
        axios.get(`${API}/pets/${petId}`).then(
            (response) => setPetInfo(response.data),
            (error) => navigate(`*`)
        );
    }, [petId, navigate]);




    const updatePetInfo = (updatedPet, petId) => {
        axios
            .put(`${API}/pets/${petId}`, updatedPet)
            .then(
                () => {
                    navigate(`/shelter/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };


    const handleTextChange = (event) => {
        setPetInfo({ ...petInfo, [event.target.id]: event.target.value });
    };

    const handleBooleanChange = (event) => {
        console.log(event.target.value == 'true')
        event.target.value == 'true' ?
            setPetInfo({ ...petInfo, [event.target.id]: event.target.value === 'true' }) :
            setPetInfo({ ...petInfo, [event.target.id]: false });
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        updatePetInfo(petInfo, petId);
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className='g-3 px-4'>
                    {/* Name */}
                    <div className="col-sm-7 petName">
                        <Form.Group className="m-2" >
                            <Form.Label>Pet's Name</Form.Label>
                            <Form.Control
                                id="name"
                                placeholder="Enter Pet's Name"
                                onChange={handleTextChange}
                                value={petInfo['name']}
                                required
                            />
                        </Form.Group>
                    </div>

                    {/* Breed */}
                    <div className="col-sm petBreed">
                        <Form.Group className="m-2" >
                            <Form.Label>Breed</Form.Label>
                            <Form.Control
                                id="breed"
                                placeholder="Enter Pet's Breed"
                                onChange={handleTextChange}
                                value={petInfo['breed']}
                                required
                            />
                        </Form.Group>
                    </div>
                </Row>

                <Row className='g-3 px-4'>
                    {/* Type */}
                    <div className="col-sm petType">
                        <Form.Group controlId="type" className="m-2" >
                            <Form.Label>Type of Pet</Form.Label>
                            <Form.Control
                                as="select"
                                value={petInfo['type']}
                                onChange={handleTextChange}
                                required
                            >
                                <option value="">Please select</option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    {/* Size */}
                    <div className="col-sm petSize">
                        <Form.Group controlId="size" className="m-2">
                            <Form.Label>Pet Size</Form.Label>
                            <Form.Control
                                as="select"
                                value={petInfo['size']}
                                onChange={handleTextChange}
                                required
                            >
                                <option value="">Please select</option>
                                <option value="Small">Small Size (22lbs or less)</option>
                                <option value="Medium">Medium Size (23lbs to 55lbs)</option>
                                <option value="Large">Larger Size (56lbs and over)</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    {/* Maintence */}
                    <div className="col-sm petMaintenanceLevel">
                        <Form.Group controlId="maintenance_level" className="m-2">
                            <Form.Label>Pet Maintenance Level</Form.Label>
                            <Form.Control
                                as="select"
                                value={petInfo['maintenance_level']}
                                onChange={handleTextChange}
                                required
                            >
                                <option value="">Please select</option>
                                <option value="Low">Low</option>
                                <option value="Mid">Mid</option>
                                <option value="High">High</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </Row>

                <Row className='g-3 px-4'>
                    {/* Age */}
                    <div className="col-sm petAge">
                        <Form.Group controlId="age" className="m-2">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                as="select"
                                value={petInfo['age']}
                                onChange={handleTextChange}
                                required
                            >
                                <option value="">Please select</option>
                                <option value="Baby">Baby</option>
                                <option value="Adult">Adult</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    {/* Color */}
                    <div className="col-sm petColor">
                        <Form.Group className="m-2 " >
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                id="color"
                                placeholder="Describe Pet's Color"
                                onChange={handleTextChange}
                                value={petInfo['color'] || 'none provided'}
                            />
                        </Form.Group>
                    </div>

                    {/* Description */}
                    <div className="col-sm petDescription">
                        <Form.Group className="m-2" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                id="description"
                                placeholder="Enter Brief Description"
                                onChange={handleTextChange}
                                value={petInfo['description'] || ' ~ none provided ~ '}
                            // required
                            />
                        </Form.Group>
                    </div>
                </Row>

                <Row className='g-3 px-4'>
                    {/* Type */}
                        <div className="col-sm petGender">
                        <Form.Group controlId="gender" className="m-2">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                value={petInfo['gender']}
                                onChange={handleTextChange}
                                required
                            >
                                <option value="">Please select</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    

                    {/* Spayed / Neutered */}
                    <div className="col-sm">


                    <div className="col-sm petGender">
                        <Form.Group controlId="gender" className="m-2">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                value={petInfo['gender']}
                                onChange={handleTextChange}
                                required
                            >
                                <option value="">Please select</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                        <Form.Group className="m-2 form-control" onChange={handleBooleanChange}>
                            <Form.Label>Spayed / Neutered</Form.Label>
                            <Form.Check
                                label='Yes'
                                name="spayed_neutered"
                                id="spayed_neutered"
                                type="radio"
                                value='true'
                                defaultChecked={petInfo['spayed_neutered']}
                            />

                            {console.log(!petInfo['spayed_neutered'])}

                            <Form.Check
                                label='No'
                                name="spayed_neutered"
                                id="spayed_neutered"
                                type="radio"
                                value='false'
                                defaultChecked={petInfo['spayed_neutered'] == 'false'}
                            />
                        </Form.Group>
                    </div>

                    {/* House Trained */}
                    <div className="col-sm">
                        <Form.Group className="m-2 form-control" onChange={handleBooleanChange}>
                            <Form.Label>House Trained</Form.Label>
                            <Form.Check
                                label='Yes'
                                name="house_trained"
                                id="house_trained"
                                type="radio"
                                value='true'
                                defaultChecked={petInfo['house_trained']}
                            />

                            <Form.Check
                                label='No'
                                name="house_trained"
                                id="house_trained"
                                type="radio"
                                value='false'
                                defaultChecked={!petInfo['house_trained']}
                            />
                        </Form.Group>
                    </div>
                </Row>

                <Row className='g-3 px-4'>
                    {/* Declawed */}
                    <div className="col-sm petDeclawed">
                        <Form.Group className="m-2 form-control" onChange={handleBooleanChange}>
                            <Form.Label>Declawed</Form.Label>
                            <Form.Check
                                label='Yes'
                                name="declawed"
                                id="declawed"
                                type="radio"
                                value="true"
                                defaultChecked={petInfo['declawed']}
                            />
                            <Form.Check
                                label='No / Not Applicable'
                                name="declawed"
                                id="declawed"
                                type="radio"
                                value="false"
                                defaultChecked={!petInfo['declawed']}
                            />
                        </Form.Group>
                    </div>

                    {/* Special Needs */}
                    <div className="col-sm petSpecialNeeds">
                        <Form.Group className="m-2 form-control" onChange={handleBooleanChange}>
                            <Form.Label>Do they have special needs?</Form.Label>
                            <Form.Check
                                label='Yes'
                                name="special_needs"
                                id="special_needs"
                                type="radio"
                                value="true"
                                defaultChecked={petInfo['special_needs']}
                            />

                            <Form.Check
                                label='No'
                                name="special_needs"
                                id="special_needs"
                                type="radio"
                                value="false"
                                defaultChecked={!petInfo['special_needs']}
                            />
                        </Form.Group>
                    </div>

                    {/* Shots */}
                    <div className="col-sm petShots">
                        <Form.Group className="m-2 form-control" onChange={handleBooleanChange}>
                            <Form.Label>Are they up to date with their shots?</Form.Label>
                            <Form.Check
                                label='Yes'
                                name="shots_current"
                                id="shots_current"
                                type="radio"
                                value='true'
                                defaultChecked={petInfo['shots_current']}
                            />
                            <Form.Check
                                label='No'
                                name="shots_current"
                                id="shots_current"
                                type="radio"
                                value='false'
                                defaultChecked={!petInfo['shots_current']}
                            />
                        </Form.Group>
                    </div>

                    {/* Status */}
                    <div className="col-sm petStatus">
                        <Form.Group className="m-2 form-control" controlId="status" onChange={handleTextChange}>
                            <Form.Label>Are they up for adoption?</Form.Label>
                            <Form.Check
                                label='Yes'
                                name="status"
                                type="radio"
                                value="adoptable"
                                defaultChecked={petInfo['status'] === 'adoptable' ? 'true' : 'false'}
                            />

                            <Form.Check
                                label='No'
                                name="status"
                                type="radio"
                                value={null}
                                defaultChecked={!petInfo['status'] ? false : true}
                            />
                        </Form.Group>
                    </div>
                </Row>
                <div className='d-flex justify-content-center m-3'>
                    <Button variant="outline-primary" type="submit" id="userForm-btn">
                        Submit
                    </Button>

                    <Link to={`/shelter/${id}`}>
                        <Button variant="outline-danger">Nevermind!</Button>
                    </Link>
                </div>

            </Form>
        </>
    )
}

export default PetEditForm