import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageOneOrder = (props) => {
    const { _id, title, text, price } = props.service;

    // Handle Delete

    return (
        <div>
            <Card className="bg-dark text-white" style={{ maxWidth: '30rem' }}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Button variant="secondary" className="me-4">Approve</Button>
                    <Button variant="secondary">Delete</Button>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
};

export default ManageOneOrder;