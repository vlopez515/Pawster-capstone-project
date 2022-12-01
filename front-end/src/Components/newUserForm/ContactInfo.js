import React from 'react';
import { Form } from 'react-bootstrap';

export default function ContactInfo({ handleTextChange, userEmail }) {
    console.log(userEmail)


    return (
        <div className="padding">
            <div className="container container-2">
                <div className="border border-dark">
                    <h4 className="text-center">Contact Info</h4>

                    {/* Email */}
                    <Form.Group className="m-3 userEmail">
                        <Form.Label>Email address</Form.Label>
                        {userEmail ?
                            (
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    value={userEmail}
                                    readOnly
                                />
                            ) :
                            (
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    onChange={handleTextChange}
                                // required
                                />
                            )}

                    </Form.Group>

                    {/* Phone Number */}
                    <Form.Group className="m-3 userPhoneNumber">
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
                </div>
            </div>

        </div>
    )
}