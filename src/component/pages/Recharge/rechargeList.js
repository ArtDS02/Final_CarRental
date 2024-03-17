import React from 'react';
import '../../../css/orderList.css'; // Import file CSS riêng

const Order = () => {
    return (
        <div className="order-list-container">
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p>19/3/2024</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p>400.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "yellow" }}>Proccing</p>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p>6/7/2023</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p>300.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "green" }}>Accept</p>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p>6/7/2023</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p>200.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p>200.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "green" }}>Accept</p>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h3>Date</h3>
                        <p>6/3/2023</p>
                    </div>
                    <div className="content">
                        <h3>Option</h3>
                        <p>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Your New Total</h3>
                        <p>100.000VND</p>
                    </div>
                    <div className="content">
                        <h3>Status</h3>
                        <p style={{ color: "green" }}>Accept</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
