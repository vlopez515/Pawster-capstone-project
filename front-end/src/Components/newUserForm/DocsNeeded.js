import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { URLRequired } from "../../Functions/userFormURLRequired";

export default function DocsNeeded({ handleTextChange }) {
    return (
        <div className="padding">
            <div className="container">
                <div className="border border-dark">
                    <h4 className="text-center">Documents Needed</h4>
                    {/* Proof of Residence and Photo ID */}
                    <div className="m-3">
                        <p className="text-muted">
                            Please share photo or pdf of the requested documents using google drive, and sharing it with: "pawster.app@gmail.com". Make sure to paste the link below!
                        </p>
                        <Row>
                            <Form.Group className="mb-3" id="proof_of_residence" onChange={handleTextChange}>
                                <Form.Label for="proof_of_residence">Proof of Residence</Form.Label>
                                {URLRequired('proof_of_residence')}
                                <Form.Text className="text-muted">Ex: Copy of Lease</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" id="photo_id" onChange={handleTextChange}>
                                <Form.Label for="photo_id">Photo ID</Form.Label>
                                {URLRequired('photo_id')}
                                <Form.Text className="text-muted">Ex: Drivers License, NYC ID, Consular identification (CID), etc.. </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" id="proof_pets_allowed" onChange={handleTextChange}>
                                <Form.Label for="proof_pets_allowed">Proof of Pets Allowed on Residence</Form.Label>
                                {URLRequired('proof_pets_allowed')}
                                <Form.Text>Ex: Pet Lease Addendum</Form.Text>
                            </Form.Group>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}