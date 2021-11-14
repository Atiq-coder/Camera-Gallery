import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';



const ManageOrders = () => {
    const [services, setServices] = useState([]);

    // Data load
    useEffect(() => {
        fetch('https://stark-mesa-58597.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container-fluid">
            <h2 className="pt-5 text-center">Manage Orders</h2>
            <Row xs={1} md={3} className="g-1">
                {
                    services.map(service => <ManageOrder key={service._id} service={service}></ManageOrder>)
                }
            </Row>
        </div>
    );
};

export default ManageOrders;