import React from 'react';
import './style.css';
import {Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';

function Navigasi() {
    return (
        <div>   
          
                <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="ALL TYPES" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        
                    </NavDropdown>
                    </Nav >
                    <Nav className="m-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="PRICE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navigasi
