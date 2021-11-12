import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CAMERA GALLERY</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/cellocutions">Cellocutions</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/deshbord">Deshbord</Link></Nav.Link>
                        {user?.email ?
                            <Button variant="secondary" onClick={logOut}>Sign Out</Button>
                            :
                            <Nav.Link><Link className="link" to="/login">Sign In</Link></Nav.Link>}

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;