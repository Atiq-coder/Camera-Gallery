import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    return (
        <>
            <Header></Header>
            <div className="purchase">
                <div className="w-50">
                    {/* Shipping Form */}
                    <Form>
                        <h5>Order contact</h5>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={user.displayName} type="text" required placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="number" required placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={user.email} type="email" required placeholder="Email" />
                        </Form.Group>
                        <h5>Shipping Address</h5>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" required placeholder="Country" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" required placeholder="City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" required placeholder="state/Region" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" required placeholder="Zip/Postal code" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control required placeholder="Street Address" as="textarea" rows={2} />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;