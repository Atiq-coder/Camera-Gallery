import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, loading } = useAuth();
    const history = useHistory();

    // Handle OnBlur
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    // Handle Register
    const handleRegister = e => {
        if (loginData.password !== loginData.re_password) {
            alert("Your password didn't metch")
        }
        registerUser(loginData.email, loginData.re_password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            <div className="signin">
                <div className="w-50">
                    <h2 className="text-center">Register</h2>
                    {loading && <p className=" text-center"><Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></p>}
                    <Form onSubmit={handleRegister} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name="name" type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name="re_password" type="password" placeholder="Re-Password" />
                        </Form.Group>
                        <Button className="mb-2" variant="dark" type="submit">
                            Submit
                        </Button><br />
                        <Link className="text-decoration-none" to="/login">Already have an account? Please Login</Link>
                    </Form>
                    {user?.email && <Alert variant="success">
                        User created successfully!
                    </Alert>}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;