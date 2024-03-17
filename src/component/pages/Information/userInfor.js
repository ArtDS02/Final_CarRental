import React from 'react';
// import '../css/login.css'; // Import file CSS riêng

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <h2>Information</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={"user1"} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" value={"password1"} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" name="username" value={"user1@gmail.com"} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Phone:</label>
                    <input type="text" id="password" name="password" value={"0386751108"} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Your Wallet:</label>
                    <input type="text" id="username" name="username" value={"500.000 VND"} />
                </div>
                <div className="form-group">
                    <button type="submit"><a href='/recharge' style={{textDecoration:"none", color:"white"}}>Recharge</a></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
