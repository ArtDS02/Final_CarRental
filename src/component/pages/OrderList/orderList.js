import React from 'react';
import '../../../css/orderList.css'; // Import file CSS riêng

const Order = () => {
    return (
        <div className="order-list-container">
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h2>Vehicle</h2>
                        <p style={{color:"white", fontSize:"20px"}}>Bentley Bentayga</p>
                    </div>
                    <div className="content">
                        <h2>Date</h2>
                        <p style={{color:"white", fontSize:"20px"}}>16/3/2024</p>
                    </div>
                    <div className="content">
                        <h2>Cost</h2>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h2>Status</h2>
                        <p style={{ color: "yellow", fontSize:"20px" }}>Processing</p>
                    </div>
                    <div className="button">
                        <button><a style={{textDecoration:"none", color:"white"}} href='/orderList1'>Delete</a></button>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h2>Vehicle</h2>
                        <p style={{color:"white", fontSize:"20px"}}>Aston Martin DBX</p>
                    </div>
                    <div className="content">
                        <h2>Date</h2>
                        <p style={{color:"white", fontSize:"20px"}}>6/7/2023</p>
                    </div>
                    <div className="content">
                        <h2>Cost</h2>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h2>Status</h2>
                        <p style={{ color: "green", fontSize:"20px" }}>Done</p>
                    </div>
                    <div className="button">
                        <button><a style={{textDecoration:"none", color:"white"}} href='/listcar'>New Order</a></button>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h2>Vehicle</h2>
                        <p style={{color:"white", fontSize:"20px"}}>AUDI Q8</p>
                    </div>
                    <div className="content">
                        <h2>Date</h2>
                        <p style={{color:"white", fontSize:"20px"}}>10/1/2023</p>
                    </div>
                    <div className="content">
                        <h2>Cost</h2>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h2>Status</h2>
                        <p style={{ color: "green", fontSize:"20px" }}>Done</p>
                    </div>
                    <div className="button">
                        <button><a style={{textDecoration:"none", color:"white"}} href='/listcar'>New Order</a></button>
                    </div>
                </div>
            </div>
            <div className="order-content">
                <div className="content-group">
                    <div className="content">
                        <h2>Vehicle</h2>
                        <p style={{color:"white", fontSize:"20px"}}>AUDI Q8</p>
                    </div>
                    <div className="content">
                        <h2>Date</h2>
                        <p style={{color:"white", fontSize:"20px"}}>10/1/2023</p>
                    </div>
                    <div className="content">
                        <h2>Cost</h2>
                        <p style={{color:"white", fontSize:"20px"}}>100.000VND</p>
                    </div>
                    <div className="content">
                        <h2>Status</h2>
                        <p style={{ color: "green", fontSize:"20px" }}>Done</p>
                    </div>
                    <div className="button">
                        <button><a style={{textDecoration:"none", color:"white"}} href='/listcar'>New Order</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
