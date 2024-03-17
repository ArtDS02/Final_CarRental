import React from 'react';
import '../../../css/orderList.css'; // Import file CSS riêng

const Order = () => {
    return (
        <div className="order-list-container">
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p style={{color:"white", fontSize:"20px"}}>19/3/2024</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p style={{color:"white", fontSize:"20px"}}>400.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "yellow", fontSize:"20px" }}>Proccing</p>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p style={{color:"white", fontSize:"20px"}}>6/7/2023</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p style={{color:"white", fontSize:"20px"}}>300.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "green", fontSize:"20px" }}>Accept</p>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p style={{color:"white", fontSize:"20px"}}>6/7/2023</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p style={{color:"white", fontSize:"20px"}}>200.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p style={{color:"white", fontSize:"20px"}}>200.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "green", fontSize:"20px" }}>Accept</p>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p style={{color:"white", fontSize:"20px"}}>6/3/2023</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "green", fontSize:"20px" }}>Accept</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
