import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../../css/adminUser.css';
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
                    <h2>Create New User</h2>
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
                            <label htmlFor="vehicle">Username</label>
                            <input
                                type="text"
                                id="vehicle"
                                value={vehicle}
                                onChange={(e) => setVehicle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle">Password</label>
                            <input
                                type="text"
                                id="vehicle"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle">Phone</label>
                            <input
                                type="text"
                                id="vehicle"
                                value={seat}
                                onChange={(e) => setSeat(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cost">Email</label>
                            <input
                                type="text"
                                id="cost"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
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
                    <input placeholder={"Search User"}></input>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    <h4>Create New User <button onClick={handleclickAdd} className='add-product'><i class="fa-solid fa-plus"></i></button></h4>
                </div>
                <div className="product-group">
                    <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/resizeUser.png")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Username</h2>
                            <p>user</p>
                        </div>
                        <div className="content">
                            <h2>Password</h2>
                            <p>password1</p>
                        </div>
                        <div className="content">
                            <h2>Phone</h2>
                            <p >0356789941</p>
                        </div>
                        <div className="content">
                            <h2>Email</h2>
                            <p >sieunhan@gmail.com</p>
                        </div>
                        <div className="product-button">
                            <button onClick={handleclickAdd}><a style={{color:"black"}}>Update</a></button>
                            <button><a href='/adminUser'>Delete</a></button>
                        </div>
                    </div>
                </div>
                <div className="product-group">
                    <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/resizeUser.png")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Username</h2>
                            <p>user1</p>
                        </div>
                        <div className="content">
                            <h2>Password</h2>
                            <p>password1</p>
                        </div>
                        <div className="content">
                            <h2>Phone</h2>
                            <p >0325648875</p>
                        </div>
                        <div className="content">
                            <h2>Email</h2>
                            <p >quadah@gmail.com</p>
                        </div>
                        <div className="product-button">
                            <button onClick={handleclickAdd}><a style={{color:"black"}}>Update</a></button>
                            <button><a href='/adminUser'>Delete</a></button>
                        </div>
                    </div>
                </div>
                <div className="product-group">
                <div className="content-group">
                        <div className="content">
                            <img style={{ borderRadius: "10px" }} src={require("../../img/resizeUser.png")} alt="Logo" />
                        </div>
                        <div className="content">
                            <h2>Username</h2>
                            <p>user2</p>
                        </div>
                        <div className="content">
                            <h2>Password</h2>
                            <p>abcde1234</p>
                        </div>
                        <div className="content">
                            <h2>Phone</h2>
                            <p >0359885641</p>
                        </div>
                        <div className="content">
                            <h2>Email</h2>
                            <p >userprovjp@gmail.com</p>
                        </div>
                        <div className="product-button">
                            <button onClick={handleclickAdd}><a style={{color:"black"}}>Update</a></button>
                            <button><a href='/adminUser'>Delete</a></button>
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
