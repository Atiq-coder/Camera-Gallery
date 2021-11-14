import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { _id, title, text, price } = props.service;

    // Handle Delete
    const handleDelete = id => {
        const url = `https://stark-mesa-58597.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');

                }
            })
    }
    return (
        <div>
            {/* Product card */}
            <Col className="p-4 product-card">
                <Card className="bg-light text-dark">
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Text><strong>Price: ${price}</strong></Card.Text>
                        <Button onClick={() => handleDelete(_id)} variant="dark">Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageOrder;