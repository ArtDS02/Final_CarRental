import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../../css/adminProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';


// Component ChartWidget để hiển thị tiêu đề và biểu đồ cột
function ChartWidget() {
    const [showAddPopup, setShowAddPopup] = useState(false); // Thay thế useState bằng React.useState
    const [image, setImage] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [type, setType] = useState('');
    const [seat, setSeat] = useState('');
    const [cost, setCost] = useState('');
    const [status, setStatus] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleclickAdd = () => {
        setShowAddPopup(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic khi ấn nút Submit ở đây, ví dụ: gửi dữ liệu lên server
        // Sau khi xử lý thành công, hiển thị thông báo và đóng popup sau 1 giây
        setSuccessMessage('Product added successfully!');
        setTimeout(() => {
            setSuccessMessage('');
            setShowAddPopup(false); // Đóng popup khi xử lý thành công
        }, 1000);
    };

    function AddProductPopup() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <h2>Add New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="vehicle">Image</label>
                            <input
                                type="file"
                                id="vehicle"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle">Vehicle</label>
                            <input
                                type="text"
                                id="vehicle"
                                value={vehicle}
                                onChange={(e) => setVehicle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle">Type</label>
                            <input
                                type="text"
                                id="vehicle"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle">Seat</label>
                            <input
                                type="text"
                                id="vehicle"
                                value={seat}
                                onChange={(e) => setSeat(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cost">Cost</label>
                            <input
                                type="text"
                                id="cost"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input
                                type="text"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                        <button onClick={() => setShowAddPopup(false)} type="submit">Cancel</button>
                    </form>
                    {successMessage && <p>{successMessage}</p>}
                </div>
            </div>
        );
    }

    return (
        <div className="content-admin">
            <div className='product-list'>
                <div style={{ boxShadow: "none", marginBottom: "50px", display: "flex" }} className='product-group-header'>
                    <input placeholder={"Search product"}></input>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    <h4>Add New Product <button onClick={handleclickAdd} className='add-product'><i class="fa-solid fa-plus"></i></button></h4>
                </div>
                <div className="product-group">
                    <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/admin/resize1.jpg")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>Bugatti Mistral W16</p>
                        </div>
                        <div className="content">
                            <h2>Cost</h2>
                            <p>$800/Day</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "red" }}>Rented</p>
                        </div>
                        <div className="product-button">
                            <button><a href='/orderList1'>Update</a></button>
                            <button><a href='/orderList1'>Delete</a></button>
                        </div>
                    </div>
                </div>
                <div className="product-group">
                    <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/admin/resize2.jpg")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>Bentley Continental</p>
                        </div>
                        <div className="content">
                            <h2>Cost</h2>
                            <p>$750/Day</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "green" }}>Available</p>
                        </div>
                        <div className="product-button">
                            <button><a href='/orderList1'>Update</a></button>
                            <button><a href='/orderList1'>Delete</a></button>
                        </div>
                    </div>
                </div><div className="product-group">
                    <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/admin/resize3.jpg")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>Rolls Royce Cullinan</p>
                        </div>
                        <div className="content">
                            <h2>Cost</h2>
                            <p>$900/Day</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "green" }}>Available</p>
                        </div>
                        <div className="product-button">
                            <button><a href='/orderList1'>Update</a></button>
                            <button><a href='/orderList1'>Delete</a></button>
                        </div>
                    </div>
                </div><div className="product-group">
                    <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/admin/resize4.jpg")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Vehicle</h2>
                            <p>Lamborghini Urus</p>
                        </div>
                        <div className="content">
                            <h2>Cost</h2>
                            <p>$750/Day</p>
                        </div>
                        <div className="content">
                            <h2>Status</h2>
                            <p style={{ color: "green" }}>Available</p>
                        </div>
                        <div className="product-button">
                            <button><a href='/orderList1'>Update</a></button>
                            <button><a href='/orderList1'>Delete</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <ul className="product-pagination-wrap">
                        <li><a href="blog2.html#" className="active">1</a></li>
                        <li><a href="blog2.html#">2</a></li>
                        <li><a href="blog2.html#">3</a></li>
                    </ul>
                </div>
            </div>
            {showAddPopup ? <AddProductPopup /> : <div></div>}
        </div>
    );
}

export default ChartWidget;
