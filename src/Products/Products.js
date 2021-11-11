import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';



const Products = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('https://eerie-demon-25137.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container-fluid">
            <h2 className="pt-5 text-center">OUR PRODUCTS</h2>
            <Row xs={1} md={3} xl={4} className="g-1">
                {
                    services.map(service => <Product key={service._id} service={service}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;