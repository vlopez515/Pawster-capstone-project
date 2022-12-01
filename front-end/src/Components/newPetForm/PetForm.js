import { useState } from 'react';
import { Button, Form } from 'react-bootstrap/';

export default function PetForm() {
    const [petInfo, setPetInfo] = useState({
        name: "",
        type: '',
        breed: "",
        size: "",
        gender: "",
        age: "",
        color: "",
        spayed_neutered: null,
        house_trained: null,
        declawed: null,
        special_needs: null,
        shots_current: null,
        description: null,
        status: null,
        shelter_id: "",
    });



    const handleTextChange = (event) => {
        setPetInfo({ ...petInfo, [event.target.id]: event.target.value });
    };

    const createPet = (petInfo) => {
        // axios
        //     .post(`${API}/pets`, petInfo)
        //     .then(
        //         () => {
        console.log(petInfo)
        // navigate(`/users`);
        //             },
        //             (error) => console.error(error)
        //         )
        //         .catch((c) => console.warn("catch", c));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createPet(petInfo);
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/* Name */}
                <Form.Group className="m-3 petName" >
                    <Form.Label>Pet's Name</Form.Label>
                    <Form.Control
                        id="name"
                        placeholder="Enter Pet's Name"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                {/* Type */}
                <Form.Group className="m-3 form-control" controlId="type" onChange={handleTextChange}>
                    <Form.Label>Type of Pet</Form.Label>
                    <Form.Check
                        label='Cat'
                        name="type"
                        type="radio"
                        value="cat"
                    />
                    <Form.Check
                        label='Dog'
                        name="type"
                        type="radio"
                        value="dog"
                    />
                </Form.Group>

                {/* Breed */}
                <Form.Group className="m-3 petBreed" >
                    <Form.Label>Breed</Form.Label>
                    <Form.Control
                        id="breed"
                        placeholder="Enter Pet's Breed"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                {/* Size */}
                <Form.Group className="m-3 form-control" controlId="size" onChange={handleTextChange}>
                    <Form.Label>Pet Size</Form.Label>
                    <Form.Check
                        label='Small Size (22lbs or less)'
                        name="size"
                        type="radio"
                        value="Small"
                    />
                    <Form.Check
                        label='Medium Size (23lbs to 55lbs)'
                        name="size"
                        type="radio"
                        value="Medium"
                    />
                    <Form.Check
                        label='Larger Size (56lbs and over)'
                        name="size"
                        type="radio"
                        value="Large"
                    />
                </Form.Group>

                {/* Type */}
                <Form.Group className="m-3 form-control" controlId="gender" onChange={handleTextChange}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        label='Female'
                        name="gender"
                        type="radio"
                        value="Female"
                    />
                    <Form.Check
                        label='Male'
                        name="gender"
                        type="radio"
                        value="Male"
                    />
                </Form.Group>

                <Form.Group className="m-3 petAge" >
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        id="age"
                        placeholder="Enter Pet's Age"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                <Form.Group className="m-3 petColor" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id="color"
                        placeholder="Describe Pet's Color"
                        onChange={handleTextChange}
                    />
                </Form.Group>

                <Form.Group className="m-3 petDescription" >
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        id="description"
                        placeholder="Enter Brief Description"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="spayed_neutered" onChange={handleTextChange}>

                    <Form.Label>Spayed / Neutered</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="spayed_neutered"
                        type="radio"
                        value="True"
                    />
                    <Form.Check
                        label='No'
                        name="spayed_neutered"
                        type="radio"
                        value="False"
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="spayed_neutered" onChange={handleTextChange}>
                    <Form.Label>House Trained</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="spayed_neutered"
                        type="radio"
                        value="True"
                    />
                    <Form.Check
                        label='No'
                        name="spayed_neutered"
                        type="radio"
                        value="False"
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="declawed" onChange={handleTextChange}>
                    <Form.Label>Declawed</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="declawed"
                        type="radio"
                        value="True"
                    />
                    <Form.Check
                        label='No / Not Applicable'
                        name="declawed"
                        type="radio"
                        value="False"
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="special_needs" onChange={handleTextChange}>
                    <Form.Label>Do they have special needs?</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="special_needs"
                        type="radio"
                        value="True"
                    />
                    <Form.Check
                        label='No'
                        name="special_needs"
                        type="radio"
                        value="False"
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="shots_current" onChange={handleTextChange}>
                    <Form.Label>Are they up to date with their shots?</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="shots_current"
                        type="radio"
                        value="True"
                    />
                    <Form.Check
                        label='No'
                        name="shots_current"
                        type="radio"
                        value="False"
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="status" onChange={handleTextChange}>
                    <Form.Label>Are they up for adoption?</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="status"
                        type="radio"
                        value="adoptable"
                    />
                    <Form.Check
                        label='No'
                        name="status"
                        type="radio"
                        value={null}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" id="userForm-btn">
                    Submit
                </Button>
            </Form>
        </>
    )
}
