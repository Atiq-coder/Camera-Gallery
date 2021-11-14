import React from 'react';
import Banner from '../Banner/Banner';
// import Footer from '../Pages/Shared/Footer/Footer';
import Gallery from '../Pages/Gallery/Gallery';
// import Header from '../Pages/Shared/Header/Header';
import Reviews from '../Pages/Reviews/Reviews';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Gallery></Gallery>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;