import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
// import Footer from '../Pages/Shared/Footer/Footer';
// import Header from '../Pages/Shared/Header/Header';
// import Footer from '../Shared/Footer/Footer';
// import Header from '../Shared/Header/Header';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className="notfound">
                <h2 className="text-center py-5">404 page not found</h2>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;