import React from 'react';
import { Col, Row } from 'react-bootstrap';

const logoSm = require('../../assets/Pawster_small.png')

export default function Footer() {
    return (
        <>
            <footer className="container-fluid text-center p-3" >
                <Row>
                    <Col >
                        <h3>Contact Us</h3>
                        <br />
                        <h6>
                            47-10 Austell Pl, 2nd floor <br /> Long Island City, NY 11101 <br />PH#: (123) 456-7890
                        </h6>
                    </Col>
                </Row>

            </footer>
        </>
    )
}

