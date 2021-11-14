import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const AddReview = () => {
    const { user } = useAuth();
    const nameRef = useRef();
    const opinionRef = useRef();
    const emailRef = useRef();
    const ratingRef = useRef();


    // Handle Add Product
    const handleAddProduct = e => {
        const name = nameRef.current.value;
        const opinion = opinionRef.current.value;
        const email = emailRef.current.value;
        const rating = ratingRef.current.value;

        const newReview = { name, opinion, email, rating };

        // Post Product
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added Successful');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="review">
            <div className="w-50">
                {/* Add product form */}
                <h2 className="text-center mb-3">Add Review</h2>
                <Form onSubmit={handleAddProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} value={user.displayName} type="text" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control ref={emailRef} value={user.email} type="text" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control ref={ratingRef} type="number" required placeholder="Input a number 1 to 5" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Opinion</Form.Label>
                        <Form.Control ref={opinionRef} required as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Add Review
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddReview;