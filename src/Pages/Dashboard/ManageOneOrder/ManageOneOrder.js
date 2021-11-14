import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ManageOneOrder = (props) => {
    const { _id, title, text, price } = props.service;

    // Handle Delete
    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Canceled successfully');

                }
            })
    }

    return (
        <div>
            <Col className="p-4 product-card">
                <Card className="bg-light text-dark">
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Text><strong>Price: ${price}</strong></Card.Text>
                        <Button className="me-3" variant="dark">Pending</Button>
                        <Button onClick={() => handleDelete(_id)} variant="dark">Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
            <br />
        </div>
    );
};

export default ManageOneOrder;