import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../../css/home.css'



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
                        <a href="/carDetail" className="button-1 mt-15 mb-15">View Details <span className="ti-arrow-top-right"></span></a>
                        <a href="/rentBill" className="button-2 mt-15 mb-15">Rent Now <span className="ti-arrow-top-right"></span></a>
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

function AboutSection() {
    return (
        <section className="about section-padding">
            {/* Your About section content */}
        </section>
    );
}

function CarTypesSection() {
    return (
        <section className="car-types1 section-padding">
            {/* Your Car Types section content */}
        </section>
    );
}

function ProcessSection() {
    return (
        <section className="process section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mb-30">
                        <div className="section-subtitle">Steps</div>
                        <div className="section-title white">Car Rental <span style={{ color: '#F5B754' }}>Process</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-30">
                        <div className="item">
                            <div className="text">
                                <h5>Choose A Car</h5>
                                <p>View our range of cars, find your perfect car for the coming days.</p>
                            </div>
                            <div className="numb">
                                <div className="numb-curv">
                                    <div className="number">01.</div>
                                    <div className="shap-left-top">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                        </svg>
                                    </div>
                                    <div className="shap-right-bottom">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-30">
                        <div className="item">
                            <div className="text">
                                <h5>Come In Contact</h5>
                                <p>Our advisor team is ready to help you with the booking process or any questions.</p>
                            </div>
                            <div className="numb">
                                <div className="numb-curv">
                                    <div className="number">02.</div>
                                    <div className="shap-left-top">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                        </svg>
                                    </div>
                                    <div className="shap-right-bottom">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-30">
                        <div className="item">
                            <div className="text">
                                <h5>Enjoy Driving</h5>
                                <p>Receive the key and enjoy your car. We treat all our cars with respect.</p>
                            </div>
                            <div className="numb">
                                <div className="numb-curv">
                                    <div className="number">03.</div>
                                    <div className="shap-left-top">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                        </svg>
                                    </div>
                                    <div className="shap-right-bottom">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mt-15">
                        <p><span className="ti-info"></span> If you've never rented a car before, we'll guide you through the process.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function VideoSection() {
    return (
        <section className="video-wrapper video section-padding bg-img bg-fixed" data-overlay-dark="4" data-background="img/slider/1.jpg">
            {/* Your Video section content */}
        </section>
    );
}

function App() {
    return (
        <div className="App">
            <Slider />
            <AboutSection />
            <CarTypesSection />
            <ProcessSection />
            <VideoSection />
        </div>
    );
}

export default App;
