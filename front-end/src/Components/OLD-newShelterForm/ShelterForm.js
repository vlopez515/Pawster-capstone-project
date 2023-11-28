import { useState } from 'react';
import { Button, Form } from 'react-bootstrap/';

function ShelterForm() {

    const [shelterInfo, setShelterInfo] = useState({
        name: "",
        address: '',
        business_hours: "",
        phone_number: "",
        email: "",
    });

    const handleTextChange = (event) => {
        setShelterInfo({ ...shelterInfo, [event.target.id]: event.target.value });
    };

    const createShelter = (shelterInfo) => {
        // axios
        //     .post(`${API}/shelter`, shelterInfo)
        //     .then(
        //         () => {
        console.log(shelterInfo)
        // navigate(`/users`);
        //             },
        //             (error) => console.error(error)
        //         )
        //         .catch((c) => console.warn("catch", c));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createShelter(shelterInfo);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/* Shelter's Name */}
                <Form.Group className="m-3 shelterName" >
                    <Form.Label>Shelter's Name</Form.Label>
                    <Form.Control
                        id="name"
                        placeholder="Enter Organization Name"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                {/* Shelter's Address */}
                <Form.Group className="m-3 shelterAddress" >
                    <Form.Label>Shelter's Address</Form.Label>
                    <Form.Control
                        id="address"
                        placeholder="Enter Address, City, State, Zip Code"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                {/* Shelter's Business Hours */}
                <Form.Group className="m-3 businessHours" >
                    <Form.Label>Business Hours</Form.Label>
                    <Form.Control
                        type="text"
                        id="business_hours"
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                {/* Phone Number */}
                <Form.Group className="m-3 shelterPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        id="phone_number"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder='123-456-7890'
                        onChange={handleTextChange}
                    // required
                    />
                </Form.Group>

                {/* Email */}
                <Form.Group className="m-3 shelter Email">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={shelterInfo.email}
                        onChange={handleTextChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" id="userForm-btn">
                    Submit
                </Button>
            </Form>
            
        </>
    )
}

export default ShelterForm