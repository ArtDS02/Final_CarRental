import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import '../../../css/login.css'; // Import file CSS riêng


const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const handleKeyPress = (event) => {
            if(event.key === 'Enter')
            {
                handleLogin(event);
            }
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            console.log(username, password);
    
            const response = await axios.post("http://localhost:3000/user/login", { username, password });
            const data = response.data;
    
            if (data.accessToken) {
                Cookies.set('token', data.accessToken, { expires: 1 / 48 });
                setError("");
                console.log("Login successful");
                window.location.href = "/";
            } else {
                console.log("Login failed");
                alert("Login failed. Please check your credentials and try again.");
            }
        } catch (err) {
            setError("An error occurred");
            console.error(err);
            alert("Login failed. Please check your username or password");
        }
    }
    
    
    return (
        <div className="login-container">
            <div className="login-content">
                <h2>Đăng nhập</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Tên người dùng:</label>
                        <input type="text" id="username" name="username" onBlur={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu:</label>
                        <input type="password" id="password" name="password" onBlur={(e) => setPassWord(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <a className='signup-link' href='/signup'>Create New Account</a>
                    </div>
                    <div className="form-group">
                        <button type="submit">Đăng nhập</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
