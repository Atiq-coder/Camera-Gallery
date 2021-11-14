import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddProduct.css';

const AddProduct = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    // Handle Add Product
    const handleAddProduct = e => {
        const title = titleRef.current.value;
        const text = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        const NewProduct = { title, text, price, img };

        // Post Product
        fetch('https://stark-mesa-58597.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added Successful');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="add-product">
            <div className="w-50">
                {/* Add product form */}
                <h2 className="text-center mb-3">Add Product</h2>
                <Form onSubmit={handleAddProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="number" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control ref={imgRef} type="text" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} required as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Add Product
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;