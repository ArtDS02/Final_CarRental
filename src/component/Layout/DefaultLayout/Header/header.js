import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GetCookie } from '~/common/saveCookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../../../css/layout.css'

const Header = () => {
    const [showCarsDropdown, setShowCarsDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [role, setRole] = useState(false);
    const [cookie, setCookie] = useState(false);

    const handleClickCartCard = () =>{
        console.log("da click roi");
        const token = Cookies.get('token');
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/user/getUser", {
                    headers: {
                        authorization: token,
                    },
                });
                console.log(response.data.role);
                Cookies.set('role', response.data.role);
                setRole(response.data.role);
                console(typeof(role))
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }

    useEffect(() => {
        const token = GetCookie('token');
        handleClickCartCard();
        if (token !== undefined) {
            setCookie(true);
        } else {
            setCookie(false);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('token');
        window.location.href = "/";
    }

    const handleClickHome = () => {
        window.location.href = "/";
    }

    const handleClickAboutUs = () => {
        window.location.href = "/aboutus";
    }

    return (
        <nav className="navbar navbar-expand-lg nav-scroll">
            <div className="container" style={{paddingTop:"0px"}}>
                {/* Logo */}
                <div className="logo-wrapper" style={{marginRight:"400px"}}>
                    <a className="logo" href="/"> <img src={require("../../../img/logo-light.png")} alt="Logo" /> </a>
                </div>
                {/* Button */}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span> </button> */}
                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" role="button">Home</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                        <li className="nav-item dropdown" onMouseEnter={() => setShowCarsDropdown(true)} onMouseLeave={() => setShowCarsDropdown(false)}>
                            <a className="nav-link dropdown-toggle" href="/listcar" role="button">Cars</a>
                            <ul className={`dropdown-menu ${showCarsDropdown ? 'show' : ''}`}>
                                    <li><a href="/luxury" className="dropdown-item"><span>Luxury</span></a></li>
                                    <li><a href="/sport" className="dropdown-item"><span>Sport</span></a></li>
                                </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button">Events <i className="ti-angle-down"></i></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" role="button" href="/aboutus">AboutUs <i className="ti-angle-down"></i></a>
                        </li>
                        {cookie ? (
                            <li className="nav-item dropdown" onMouseEnter={() => setShowUserDropdown(true)} onMouseLeave={() => setShowUserDropdown(false)}>
                                <a className="nav-link dropdown-toggle" href="#" role="button" >User <i className="ti-angle-down"></i></a>
                                <ul className={`dropdown-menu ${showUserDropdown ? 'show' : ''}`}>
                                    <li><a href="userInfor" className="dropdown-item"><span>Information</span></a></li>
                                    {role ?  <li><a href="/admin" className="dropdown-item"><span>Admin</span></a></li> : <div></div>}
                                    <li><a href="/orderList" className="dropdown-item"><span>Payment History</span></a></li>
                                    <li><a href="/rechargeList" className="dropdown-item"><span>Recharge History</span></a></li>
                                    <li><a onClick={handleLogout} className="dropdown-item"><span>Logout</span></a></li> {/* Thay đổi ở đây */}
                                </ul>
                            </li>

                        ) : (
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/login" role="button">Login</a>
                            </li>
                        )}
                    </ul>
                    <div className="navbar-right">
                        <div className="wrap">
                            <div className="icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="text">
                                <p>Need help?</p>
                                <h5><a href="tel:8551004444" style={{textDecoration:"none"}}>855 100 4444</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
