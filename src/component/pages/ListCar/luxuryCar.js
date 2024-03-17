import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../../css/listCar.css'


function Slider() {
    return (
        <header className="header slider-fade">
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../img/slider/11.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>Luxury</h1>
                        <h5>Bentley Bentayga <span style={{ color: 'yellow', fontSize: '18px' }}>$600 <i style={{ color: 'white' }}>/ day</i></span></h5>
                        <a href="#0" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a>
                        <a href="#0" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../img/slider/12.jpg")}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>Luxury</h1>
                        <h5>Rolls Royce Cullinan <span style={{ color: 'yellow', fontSize: '18px' }}>$900 <i style={{ color: 'white' }}>/ day</i></span></h5>
                        <a href="#0" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a>
                        <a href="#0" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../img/slider/14.jpg")}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>Luxury</h1>
                        <h5>Audi RS7 Sportback <span style={{ color: 'yellow', fontSize: '18px' }}>$450 <i style={{ color: 'white' }}>/ day</i></span></h5>
                        <a href="#0" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a>
                        <a href="#0" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </header>
    );
}

function CarSection() {
    return (
        <section className="cars1 section-padding">
            <div className="container">
                <div className="row">
                    <div class="col-lg-6 col-md-12 mb-60">
                        <div class="item">
                            <div class="img"> <img
                                className="d-block w-100"
                                src={require("../../img/slider/11.jpg")}
                                alt="First slide"
                            /> </div>
                            <div class="con active">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="title"><a href="#">Bentley Bentayga</a></div>
                                        <div class="details"> <span><i class="omfi-door"></i> 4 Seats</span> <span><i class="omfi-transmission"></i> Auto</span> <span><i class="omfi-luggage"></i> 2 Bags</span></div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="book">
                                            <div><a href="/carDetail" class="btn"><span>Rent Now</span></a></div>
                                            <div><span class="price">$600</span><span>/day</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-60">
                        <div class="item">
                            <div class="img"> <img
                                className="d-block w-100"
                                src={require("../../img/slider/12.jpg")}
                                alt="First slide"
                            /> </div>
                            <div class="con active">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="title"><a href="#">Rolls Royce Cullinan</a></div>
                                        <div class="details"> <span><i class="omfi-door"></i> 4 Seats</span> <span><i class="omfi-transmission"></i> Auto</span> <span><i class="omfi-luggage"></i> 4 Bags</span></div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="book">
                                            <div><a href="/carDetail" class="btn"><span>Rent Now</span></a></div>
                                            <div><span class="price">$900</span><span>/day</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-60">
                        <div class="item">
                            <div class="img"> <img
                                className="d-block w-100"
                                src={require("../../img/slider/13.jpg")}
                                alt="First slide"
                            /> </div>
                            <div class="con active">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="title"><a href="#">Bentley Continental</a></div>
                                        <div class="details"> <span><i class="omfi-door"></i> 4 Seats</span> <span><i class="omfi-transmission"></i> Auto</span> <span><i class="omfi-luggage"></i> 2 Bags</span></div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="book">
                                            <div><a href="/carDetail" class="btn"><span>Rent Now</span></a></div>
                                            <div><span class="price">$500</span><span>/day</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}


function App() {
    return (
        <div className="App">
            <Slider />
            <CarSection />
        </div>
    );
}

export default App;
