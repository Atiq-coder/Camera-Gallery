import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';



const Reviews = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container-fluid">
            <h2 className="pt-5 text-center">OUR REVIEWS</h2>
            <Row xs={1} md={3} className="g-1">
                {
                    services.map(service => <Review key={service._id} service={service}></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;