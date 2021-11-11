import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/5f8745ea428582a0bb860566/master/w_1920%2Cc_limit/Barbados-GettyImages-868720620.jpg"
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
                        src="https://media.cntraveler.com/photos/5e3839e21e8a810008d21c2f/master/w_1920%2Cc_limit/CaribbeanLandingPage-StLucia-2020-GettyImages-166565984.jpg"
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
                        src="https://media.cntraveler.com/photos/5cb63a261a7e702d60f70951/master/w_1920%2Cc_limit/Lavender-fields-Provence_GettyImages-680500373.jpg"
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
                        src="https://media.cntraveler.com/photos/605967821b01d7e74b70528d/master/w_1920%2Cc_limit/IsleOfSkye-GettyImages-1160979608.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Carrizo Plain National Monument</h3>
                        <p>This expansive grassland is best known for the vibrant wildflower displays that carpet its rolling hills </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/5cb63a4a515ac847de3761ad/master/w_1920%2Cc_limit/Plitvice-Lakes-National-Park-Croatia_GettyImages-609917794.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Plitvice Lakes National Park, Croatia</h3>
                        <p>If you can make it through the crowds of selfie-taking tourists, you'll discover that Plitvice Lakes </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;