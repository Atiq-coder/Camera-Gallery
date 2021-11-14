import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
// import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import Pay from '../Pay/Pay';
import AddReview from '../Review/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const [show, setShow] = useState(false);
    const { admin } = useAuth();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { path, url } = useRouteMatch();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="ms-auto">
                        <Nav.Link><Link className="link" to="/dashboard"><Button variant="secondary" onClick={handleShow}>Dashboard</Button></Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Offcanvas className="bg-secondary" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link><Link className="link" to="/home">Back to home</Link></Nav.Link>
                        {admin ? <>
                            <Nav.Link><Link className="link" to={`${url}/manageAllOrders`}>Manage All Orders</Link></Nav.Link>
                            <Nav.Link><Link className="link" to={`${url}/addProduct`}>Add Product</Link></Nav.Link>
                            <Nav.Link><Link className="link" to={`${url}/makeAdmin`}>Make Admin</Link></Nav.Link>
                            <Nav.Link><Link className="link" to={`${url}/manageOrders`}>Manage Orders</Link></Nav.Link>
                        </> : <>
                            <Nav.Link><Link className="link" to={`${url}/pay`}>Pay</Link></Nav.Link>
                            <Nav.Link><Link className="link" to={`${url}/myOrders`}>My Orders</Link></Nav.Link>
                            <Nav.Link><Link className="link" to={`${url}/review`}>Review</Link></Nav.Link>
                        </>}
                        {user?.email ?
                            <Button variant="secondary" onClick={logOut}>Sign Out</Button>
                            : ''}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            <Switch>
                <Route exact path={path}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                    <AddReview></AddReview>
                </Route>
                <AdminRoute path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageOrders`}>
                    <ManageOrders></ManageOrders>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
            </Switch>
        </>
    );
};

export default Dashboard;

