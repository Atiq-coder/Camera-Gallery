import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Collection = (props) => {
    const { title, text, img, price } = props.service;
    return (
        <div>
            {/* Product card */}
            <Col className="p-4 product-card">
                <Card className="bg-light text-dark">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Text><strong>Price: ${price}</strong></Card.Text>
                        <Button variant="dark">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Collection;