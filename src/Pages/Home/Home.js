import React from 'react';
import Banner from '../Banner/Banner';
import Collections from '../Collections/Collections';
// import Banner from '../Pages/Banner/Banner';
// import Footer from '../Pages/Shared/Footer/Footer';
import Gallery from '../Gallery/Gallery';
// import Header from '../Pages/Shared/Header/Header';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
// import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Gallery></Gallery>
            <Collections></Collections>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;