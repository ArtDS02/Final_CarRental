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
                            <p>User1</p>
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>Bentley Bentayga</p>
                        </div>
                        <div className="content">
                            <h2>Phone</h2>
                            <p style={{ color: "black" }}>0386754412</p>
                        </div>
                        <div className="content">
                            <h2>Date</h2>
                            <p>16/3/2024</p>
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
                            <p>User2</p>
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>AUDI Q8</p>
                        </div>
                        <div className="content">
                            <h2>Phone</h2>
                            <p style={{ color: "black" }}>0356441236</p>
                        </div>
                        <div className="content">
                            <h2>Date</h2>
                            <p>1/3/2024</p>
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
                            <p>User</p>
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>Aston Martin DBX</p>
                        </div>
                        <div className="content">
                            <h2>Phone</h2>
                            <p style={{ color: "black" }}>0123456789</p>
                        </div>
                        <div className="content">
                            <h2>Date</h2>
                            <p>16/3/2024</p>
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
