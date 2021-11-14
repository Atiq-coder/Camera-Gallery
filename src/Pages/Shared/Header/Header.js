import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Navbar.Brand className="ps-1">CAMERA GALLERY</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/collections">Collections</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/purchase">Purchase</Link></Nav.Link>
                            {user?.email ?
                                <Nav.Link><Link className="link" to="/dashboard">Dashboard</Link></Nav.Link>
                                :
                                ''}
                            <span className="text-white mt-2">{user?.displayName}</span>
                            {user?.email ?
                                <Button variant="dark" onClick={logOut}>Sign Out</Button>
                                :
                                <Nav.Link><Link className="link" to="/login">Sign In</Link></Nav.Link>}

                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;