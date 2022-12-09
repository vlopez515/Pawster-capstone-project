import React from 'react';
import { Form } from 'react-bootstrap';

export default function PetPreferences({ handleTextChange, userFree_time }) {
    return (
        <>
            <div className="p-2">
                <div className="container">
                    <div className="border border-dark">
                        <h4 className="text-center m-3">What You're Looking For..</h4>

                        {/* Prefences */}
                        <Form.Group className="m-3" controlId="preferences" onChange={handleTextChange}>
                            <Form.Label>Pet Maintance Preference</Form.Label>
                            <Form.Check
                                label='High - pet requires their foster parent to be more involved in their care'
                                type="radio"
                                value="high"
                            />
                            <Form.Check
                                label='Low - pet requires little to no oversight'
                                type="radio"
                                value="low"
                            />
                            <Form.Check
                                label="Doesn't matter"
                                type="radio"
                                value="both"
                            />
                        </Form.Group>

                        {/* Pet Type */}
                        <Form.Group className="m-3" controlId="preferences" onChange={handleTextChange}>
                            <Form.Label>Pet Preference</Form.Label>
                            <Form.Check
                                label='Cat'
                                type="radio"
                                value="cat"
                            />
                            <Form.Check
                                label='Dog'
                                type="radio"
                                value="dog"
                            />
                            <Form.Check
                                label="Show me both Cats and Dogs"
                                type="radio"
                                value="both"
                            />
                        </Form.Group>

                        {/* Free Time */}
                        <div className="m-3">
                            <Form.Group controlId="free_time">
                                <Form.Label>Free Time </Form.Label>
                                <p className="text-muted">
                                    In order to help find your perfect pet match, please select an option below that best explains the time you can dedicate caring for them.
                                </p>
                                <Form.Control
                                    as="select"
                                    value={userFree_time}
                                    onChange={handleTextChange}
                                >
                                    <option value="">Please select</option>
                                    <option value="1-2">1-2 hours</option>
                                    <option value="2-3">2-3 hours</option>
                                    <option value="4-5">4-5 hours</option>
                                    <option value="5-10">5-10 hours</option>
                                    <option value="anyTime">Can dedicate all the necessary time</option>
                                </Form.Control>
                            </Form.Group>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}