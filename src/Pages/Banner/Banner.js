import React from 'react';
import { Carousel } from 'react-bootstrap';

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
                        <h3>Barbados</h3>
                        <p>Barbados has something for everyone: pink sand beaches, exotic wildlife (think monkeys,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images5.alphacoders.com/292/thumb-1920-292677.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Lucia</h3>
                        <p>This deeply green and mountainous island is a favorite for those looking for adventure and romance. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/476333.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Northern Colorado</h3>
                        <p>With its lush forests, snow-capped peaks, icy-blue alpine lakes, and abundant herds of elk,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://live.staticflickr.com/8029/7948158008_9beb2e6e35_o.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Carrizo Plain National Monument</h3>
                        <p>This expansive grassland is best known for the vibrant wildflower displays that carpet its rolling hills </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;