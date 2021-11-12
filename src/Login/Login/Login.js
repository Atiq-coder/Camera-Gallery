import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, loading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className="signin">
            <div className="w-50">
                <h2 className="text-center">LogIn</h2>
                {loading && <p className=" text-center"><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></p>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onBlur={handleOnBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mb-2" variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p><Link className="text-decoration-none" to="/register">New user? Please Register</Link></p>
                {user?.email && <Alert variant="success">
                    login successfully!
                </Alert>}
            </div>
        </div>
    );
};

export default Login;