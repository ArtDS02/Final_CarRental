import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../../../css/layout.css'

const Footer = () => {
    return (
        <footer className="footer clearfix">
            <div className="container">
                <div className="first-footer">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="links dark footer-contact-links">
                                <div className="footer-contact-links-wrapper">
                                    <div className="footer-contact-link-wrapper">
                                        <div className="image-wrapper footer-contact-link-icon">
                                            <div className="icon-footer"> <i class="fa-solid fa-phone"></i> </div>
                                        </div>
                                        <div className="footer-contact-link-content">
                                            <h6>Call us</h6>
                                            <p>+971 52-333-4444</p>
                                        </div>
                                    </div>
                                    <div className="footer-contact-links-divider"></div>
                                    <div className="footer-contact-link-wrapper">
                                        <div className="image-wrapper footer-contact-link-icon">
                                            <div className="icon-footer"> <i className="fa-solid fa-envelope-open"></i> </div>
                                        </div>
                                        <div className="footer-contact-link-content">
                                            <h6>Write to us</h6>
                                            <p>info@renax.com</p>
                                        </div>
                                    </div>
                                    <div className="footer-contact-links-divider"></div>
                                    <div className="footer-contact-link-wrapper">
                                        <div className="image-wrapper footer-contact-link-icon">
                                            <div className="icon-footer"> <i className="fa-solid fa-location-dot"></i> </div>
                                        </div>
                                        <div className="footer-contact-link-content">
                                            <h6>Address</h6>
                                            <p>242 Huynh Van nghe, Ngu Hanh Son, Da Nang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-footer">
                    <div className="row">
                        <div className="col-md-4 widget-area">
                            <div className="widget clearfix">
                                <div className="widget-text">
                                    <p>Some of our social networking sites.</p>
                                    <div className="footer-contact-links-wrapper">
                                        <div className="footer-contact-link-wrapper">
                                            <div className="image-wrapper footer-contact-link-icon">
                                                <div className="icon-footer"> <i className="fa-brands fa-snapchat"></i> </div>
                                            </div>

                                        </div>
                                        <div className="footer-contact-links-divider"></div>
                                        <div className="footer-contact-link-wrapper">
                                            <div className="image-wrapper footer-contact-link-icon">
                                                <div className="icon-footer"> <i className="fa-brands fa-facebook"></i> </div>
                                            </div>

                                        </div>
                                        <div className="footer-contact-links-divider"></div>
                                        <div className="footer-contact-link-wrapper">
                                            <div className="image-wrapper footer-contact-link-icon">
                                                <div className="icon-footer"> <i className="fa-brands fa-instagram"></i> </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 offset-md-1 widget-area">
                            <div className="widget clearfix usful-links">
                                <h3 className="widget-title">Quick Links</h3>
                                <ul>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="cars.html">Cars</a></li>
                                    <li><a href="car-types.html">Car Types</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 widget-area">
                            <div className="widget clearfix">
                                <h3 className="widget-title">Subscribe</h3>
                                <p>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                                <div className="widget-newsletter">
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" required></input>
                                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>  
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
