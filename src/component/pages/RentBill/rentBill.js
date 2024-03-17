import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import '../../../css/rentBill.css'; // Import file CSS riêng


const Login = () => {

    function handlePay() {
        window.location.href = "/orderList";
    }


    return (
        <div className="login-container">
            <div className="login-content">
                <div className='content-group'>
                    <div className='content' >
                        <h2 style={{ textAlign: 'center' }}>Your Order</h2>
                        <form>
                            <div className="features"><span><i class="fa-solid fa-car"></i> Vehicle</span>
                                <p>Bentley Bentayga</p>
                            </div>
                            <div className="features"><span><i class="fa-solid fa-car"></i> Type:</span>
                                <p>Luxury Cars</p>
                            </div>
                            <div className="features"><span><i class="fa-solid fa-car"></i> Down payment</span>
                                <p>100.000 VND</p>
                            </div>
                            <div className="form-group">
                                <button type="submit"><a style={{textDecoration:"none",color:"white"}} href="/orderList">Accept</a></button>
                            </div>
                        </form>
                    </div>
                    <div className='content' style={{paddingTop:"50px"}}>
                        <form onSubmit={handlePay}>
                            <div className="features"><span><i class="fa-solid fa-wallet"></i> Your Wallet</span>
                                <p>500.000 VND</p>
                            </div>
                            <div className="features"><span><i class="fa-solid fa-wallet"></i> Payment:</span>
                                <p>100.000 VND</p>
                            </div>
                            <div className="features"><span><i class="fa-solid fa-wallet"></i> Remaining balance after payment:</span>
                                <p>400.000 VND</p>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;
