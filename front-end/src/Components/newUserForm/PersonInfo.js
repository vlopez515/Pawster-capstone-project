import React from 'react';
import { Form } from 'react-bootstrap/';

export default function PersonInfo({ handleTextChange, handleNumberChange }) {
    return (
        <div className='p-2'>
            <div className="container">
                <div className="border border-dark">
                    <h4 className="text-center m-3">Personal Information</h4>
                    {/* Name */}
                    <Form.Group className="m-3 userFullName" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            id="name"
                            placeholder="Enter Your Full Name"
                            onChange={handleTextChange}
                        // required
                        />
                    </Form.Group>

                    {/* Age */}
                    <Form.Group className="m-3 userAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            id="age"
                            type="number"
                            placeholder="Enter age"
                            onChange={handleNumberChange}
                        // required
                        />
                    </Form.Group>

                    {/* Sex */}
                    <div className="m-3 sex-div-outter" onChange={handleTextChange}>
                        <Form.Label>Sex</Form.Label>
                        <div className="p-3 sex-div-inner border">
                            <Form.Check
                                label='Male'
                                name='sex'
                                type="radio"
                                id="sex"
                                value="male"
                            />
                            <Form.Check
                                label='Female'
                                name='sex'
                                type="radio"
                                id="sex"
                                value="female"
                            />
                            <Form.Check
                                label='Prefer Not to Say'
                                name='sex'
                                type="radio"
                                id="sex"
                                value="null"
                            />
                        </div>
                    </div>

                    {/* Income */}
                    <Form.Group className="m-3 userIncome">
                        <Form.Label>Annual Income</Form.Label>
                        <Form.Control
                            id="income"
                            type="number"
                            placeholder="Enter Your Net Income"
                            onChange={handleNumberChange}
                        // required
                        />
                    </Form.Group>
                </div>
            </div>
        </div>

    )
}