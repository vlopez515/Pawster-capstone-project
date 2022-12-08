import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { GoogleButton } from 'react-google-button'
// import { signOut } from "../../Services/Firebase";
import { VscGear } from 'react-icons/vsc';
import { SlOptions } from 'react-icons/sl'
import { Dropdown } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";

const logoCut = require('../../assets/Pawster_cut.png')

function Header() {
    let { id } = useParams();
     console.log(id);

    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container className="justify-content">
                <Dropdown>
                    <Dropdown.Toggle variant="none" className="profile-navbar-toggle">
                        <SlOptions color='white' size={20} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item>
                            <Link to={`/shelter/${id}/settings`}>
                            Settings <VscGear size={20} />
                            </Link>
                            </Dropdown.Item>
                        <Dropdown.Item >Sign Out</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <Navbar.Brand href={`/shelter/${id}`}>
                    <img
                        src={logoCut}
                        className="d-inline-block align-top"
                        id='navLogo'
                        alt="ogo"
                    />
                </Navbar.Brand>

                <Button variant="outline-light">
                    <a href={`/shelter/${id}/new-pet`}className="text-center">Add Pet</a>
                </Button>
            </Container>
        </Navbar>
    );
}

export default Header




