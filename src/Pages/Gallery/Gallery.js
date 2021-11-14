import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import GalleryImg from '../GalleryImg/GalleryImg';

const Gallery = () => {
    const [services, setServices] = useState([]);

    // Data load
    useEffect(() => {
        fetch('https://stark-mesa-58597.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container-fluid">
            <h2 className="pt-5 text-center">CAPTURED IMAGES</h2>
            <Row xs={1} md={3}>
                {
                    services.map(service => <GalleryImg key={service._id} service={service}></GalleryImg>)
                }
            </Row>
        </div>
    );
};

export default Gallery;