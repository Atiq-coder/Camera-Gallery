import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Collection from '../Collection/Collection';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';



const Collections = () => {
    const [services, setServices] = useState([]);

    // Data load
    useEffect(() => {
        fetch('https://stark-mesa-58597.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <>
            <Header></Header>
            <div className="cards-section container-fluid">
                <h2 className="pt-5 text-center">OUR PRODUCTS</h2>
                <Row xs={1} md={3} className="g-1">
                    {
                        services.map(service => <Collection key={service._id} service={service}></Collection>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Collections;