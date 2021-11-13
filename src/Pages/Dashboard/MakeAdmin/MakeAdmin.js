import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addedAdmin, setAddedAdmin] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminAdd = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setAddedAdmin(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div className="make-admin">
            <div className="w-50">
                {/* Add product form */}
                <Form onSubmit={handleAdminAdd}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Make an admin</Form.Label>
                        <Form.Control onBlur={handleOnBlur} type="email" required placeholder="Email" />
                    </Form.Group>
                    <Button className="w-100" variant="secondary" type="submit">
                        Add Admin
                    </Button>
                </Form>
                {addedAdmin && <Alert className="mt-3 text-center" variant="success">
                    Added Admin successfully!
                </Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;