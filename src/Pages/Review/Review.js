import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { name, opinion, rating } = props.service;
    return (
        <div>
            {/* Product card */}
            <Col className="p-4 product-card">
                <Card className="bg-light text-dark">
                    <Card.Body className="text-center">
                        <Card.Title className="mb-3">{name}</Card.Title>
                        <Card.Title><b>Rating: {rating}</b></Card.Title>
                        <Card.Text><b>Opinion:</b> {opinion}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;