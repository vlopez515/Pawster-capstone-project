// import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap/';

import PersonInfo from "./PersonInfo";
import ContactInfo from "./ContactInfo";
import PetPreferences from "./PetPrefences";
import UserAddressForm from './UserAddressForm';
import DocsNeeded from "./DocsNeeded";

// const API = process.env.REACT_APP_API_URL

export default function UserForm() {
    let usedEmail = "onepieceIsReal@gmail.com"; // should grab firebase email value directly
    // let usedEmail = ''

    const [addressInfo, setAddInfo] = useState({
        address: "",
        city: "",
        state: "",
        zip: "",
        complete: "",
    });
    console.log(addressInfo.complete)

    // let navigate = useNavigate();

    const createNewUser = (userInfo) => {
        // axios
        //     .post(`${API}/users`, userInfo)
        //     .then(
        //         () => {
        console.log(userInfo)
        // navigate(`/users`);
        //             },
        //             (error) => console.error(error)
        //         )
        //         .catch((c) => console.warn("catch", c));
    };

    const [userInfo, setUserInfo] = useState({
        name: "",
        income: 0,
        age: 0,
        sex: "",
        household_size: "",
        residence_type: "",
        free_time: 0,
        preferences: "",
        pet_type: "",
        address: addressInfo.complete,
        proof_of_residence: "",
        photo_id: "",
        proof_pets_allowed: "",
        phone_number: "",
        email: usedEmail,
    });

    const handleTextChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        createNewUser(userInfo);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>

                {/* Personal Info */}
                <PersonInfo handleTextChange={handleTextChange} />

                {/* Contact Info */}
                <ContactInfo userEmail={userInfo.email} handleTextChange={handleTextChange} />

                {/* Housing Info */}
                <UserAddressForm
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    addressInfo={addressInfo}
                    setAddInfo={setAddInfo}
                    handleTextChange={handleTextChange}
                />

                {/* Documemts Needed */}
                <DocsNeeded handleTextChange={handleTextChange} />

                {/* What You're Looking For.. */}
                <PetPreferences userFree_time={userInfo.free_time} handleTextChange={handleTextChange} />

                <Button variant="primary" type="submit" id="userForm-btn">
                    Submit
                </Button>
            </Form>

        </>
    );
}









