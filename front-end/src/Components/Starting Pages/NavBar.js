import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const logoCut = require('../../assets/Pawster_cut.png')
const logoSm = require('../../assets/Pawster_small.png')

export default function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="/">
            <img 
                src={logoCut}
                className="d-inline-block align-top"
                id='navLogo'
                alt="ogo"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" > 
            <Nav.Link href="/about" className="text-center">About Us</Nav.Link>
            <Nav.Link href="/products" className="text-center">Products</Nav.Link>
            <Nav.Link href="/support" className="text-center">Support</Nav.Link>
            <Nav.Link href="/contact" className="text-center">Contact Us</Nav.Link>
            <Button className='nav-button text-center' variant='primary' size='sm' href="/login">Log in</Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

