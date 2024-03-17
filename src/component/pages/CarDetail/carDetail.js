import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../../css/carDetail.css'


function Slider() {
    return (
        <section className="banner-header section-padding bg-img" data-overlay-dark="5" style={{ backgroundImage: `url(${require("../../img/slider/11.jpg")})` }}>
            <div className='cover-image'>
            </div>
            <div className="v-middle" style={{ color: "white", fontWeight: "bold", maxWidth: "fit-content" }}>
                <div className="col-md-12" style={{ color: "white", fontWeight: "bold", maxWidth: "fit-content" }}>
                    <h6 >Luxury Cars</h6>
                    <h1 style={{ color: "white", fontWeight: "bold", maxWidth: "fit-content" }}>Bentley Bentayga</h1>
                </div>
            </div>
        </section>
    );
}

function CarSection() {
    return (
        <section className="car-details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-12 mb-60">
                                <h3>General Information</h3>
                                <p className="mb-30">Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-text">
                                            <p>24/7 Roadside Assistance</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-text">
                                            <p>Free Cancellation & Return</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-text">
                                            <p>Rent Now Pay When You Arrive</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" style={{ paddingBottom: "20px" }}>
                                <h3>Image Gallery</h3>
                            </div>
                        </div>
                        <div className="row gallery-items mb-60" style={{ paddingBottom: "20px" }}>
                            <div className="col-md-6 gallery-masonry-wrapper single-item cardio">
                                <a href="img/slider/11b.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                                    <div className="gallery-box">
                                        <div className="gallery-img"> <img src={require("../../img/slider/11b.jpg")} className="img-fluid mx-auto d-block" alt="" /> </div>
                                        <div className="gallery-masonry-item-img"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 gallery-masonry-wrapper single-item crossfit">
                                <a href="img/slider/11a.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                                    <div class="gallery-box">
                                        <div className="gallery-img"> <img src={require("../../img/slider/11a.jpg")} className="img-fluid mx-auto d-block" alt="" /> </div>
                                        <div className="gallery-masonry-item-img"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" style={{ paddingBottom: "20px" }}>
                                <h3>Rental Conditions</h3>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <ul className="accordion-box clearfix">
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">1.</span> Contract and Annexes</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">2.</span> Driving License and Age</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">The tenant must be 25 years of age and have a 5-year local or valid international driver's license for group A, B, C, D vehicles at the time of the rental agreement.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">3.</span> Prices</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Prices include maintenance and insurance guarantee against third parties (within legal policy limits). 18% VAT (value added tax) is not included. Fuel belongs to the renter. Chauffeur driven service and translator guide are available upon request.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">4.</span> Payments</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">The total rental fee is collected at the time of rental. The shortest rental period is 72 hours, and in case of delay, 1/3 of the fee is charged for each additional hour. Delays exceeding 3 hours in total are calculated as a full day. A deposit is required from a valid credit card.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">5.</span> Delivery</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Delivery is free of charge where our Rent a car company is located. Delivery in these cities is possible with prior notice; hotel, workplace, station, port etc. It can be done in places. For vehicle deliveries and returns in cities where our office is not located, a delivery fee of 0.2 Euro/km is applied, starting from the rented location.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">6.</span> Traffic Fines</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Traffic fines toll and illegal toll fees belong to the customer. If the vehicles are detained by traffic, this period is included in the rental period. In necessary cases, we may change these conditions and information and the vehicle type specified in the reservation without prior notice. Our vehicles cannot be taken abroad.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn"><span className="count">7.</span> Contract and Annexes</div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-car">
                            <div className="title">
                                <h4>$600 <span>/ rent per day</span></h4>
                            </div>
                            <div className="item">
                                <div className="features"><span><i class="fa-solid fa-car"></i> Doors</span>
                                    <p>4</p>
                                </div>
                                <div className="features"><span><i class="fa-solid fa-door-open"></i> Passengers</span>
                                    <p>5</p>
                                </div>
                                <div className="features"><span><i class="fa-solid fa-arrow-down-wide-short"></i> Transmission</span>
                                    <p>Auto</p>
                                </div>
                                <div className="features"><span><i class="fa-solid fa-box"></i> Luggage</span>
                                    <p>2 Bags</p>
                                </div>
                                <div className="features"><span><i class="fa-solid fa-temperature-arrow-up"></i> Air Condition</span>
                                    <p>Yes</p>
                                </div>
                                <div className="features"><span><i class="fa-solid fa-id-card"></i> Age</span>
                                    <p>25</p>
                                </div>
                                <div class="btn-double mt-30" data-grouptype="&amp;"> <a href="/rentBill">Rent Now</a> <a href="/" target="_blank"><span class="fa-brands fa-whatsapp"></span> FaceBook</a> </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
