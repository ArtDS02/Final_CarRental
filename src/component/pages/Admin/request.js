import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../../css/adminIndex.css';

// Component ChartWidget để hiển thị tiêu đề và biểu đồ cột
function ChartWidget() {
    return (
        <div className="content-admin">
            <div className='request-list'>
                <div style={{boxShadow:"none", marginBottom:"50px"}} className='request-group-header'>
                    <h1>Request Management</h1>
                </div>
                <div className="request-group">
                    <div className="content-group">
                        <div className="content">
                            <h2>Name</h2>
                            <p>User 1</p>
                        </div>
                        <div className="content">
                            <h2>Option</h2>
                            <p>100.000VND</p>
                        </div>
                        <div className="content">
                            <h2>Date</h2>
                            <p>16/3/2024</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "black" }}>Processing</p>
                        </div>
                        <div className="request-button">
                            <button><a href='/orderList1'>Accept</a></button>
                            <button><a href='/orderList1'>Reject</a></button>
                        </div>
                    </div>
                </div>
                <div className="request-group">
                    <div className="content-group">
                        <div className="content">
                            <h2>Name</h2>
                            <p>User 2</p>
                        </div>
                        <div className="content">
                            <h2>Option</h2>
                            <p>200.000VND</p>
                        </div>
                        <div className="content">
                            <h2>Date</h2>
                            <p>16/3/2024</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "green" }}>Paid</p>
                        </div>
                        <div className="request-button">
                            <button><a href='/orderList1'>Accept</a></button>
                            <button><a href='/orderList1'>Reject</a></button>
                        </div>
                    </div>
                </div>
                <div className="request-group">
                    <div className="content-group">
                        <div className="content">
                            <h2>Name</h2>
                            <p>User 3</p>
                        </div>
                        <div className="content">
                            <h2>Option</h2>
                            <p>500.000VND</p>
                        </div>
                        <div className="content">
                            <h2>Date</h2>
                            <p>16/3/2024</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "green" }}>Paid</p>
                        </div>
                        <div className="request-button">
                            <button><a href='/orderList1'>Accept</a></button>
                            <button><a href='/orderList1'>Reject</a></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ChartWidget;
