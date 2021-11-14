import React from 'react';
import { Card, Col } from 'react-bootstrap';

const GalleryImg = (props) => {
    const { img } = props.service;
    return (
        <div className="m-0 p-0">
            {/* Product card */}
            <Col className="product-card">
                <Card>
                    <Card.Img variant="top" src={img} />
                </Card>
            </Col>
        </div>
    );
};

export default GalleryImg;