import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">COPYRIGHT &copy; CAMERA GALLERY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Help</Nav.Link>
                            <Nav.Link href="#deets">Blog</Nav.Link>
                            <Nav.Link href="#deets">More us</Nav.Link>
                            <Nav.Link href="#deets">Issues</Nav.Link>
                            <Nav.Link href="#deets">Examples</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;