import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.wallpapertip.com/wmimgs/27-273297_nikon-d810.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Link to="/collections"><h2 className="text-white mb-5">Explore</h2> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images5.alphacoders.com/292/thumb-1920-292677.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Link to="/collections"><h2 className="text-white mb-5">Explore</h2> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/476333.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Link to="/collections"><h2 className="text-white mb-5">Explore</h2> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://live.staticflickr.com/8029/7948158008_9beb2e6e35_o.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Link to="/collections"><h2 className="text-white mb-5">Explore</h2> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;