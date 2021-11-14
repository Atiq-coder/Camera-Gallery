import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();

    if (loading) {
        return <p className=" text-center"><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></p>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children
                : <Redirect to={{
                    pathname: "/",
                    state: { from: location }
                }}
                ></Redirect>
            }
        ></Route>
    );
};

export default AdminRoute;