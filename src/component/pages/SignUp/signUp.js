import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import '../../../css/SignUp.css'; // Import file CSS riêng


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
    
            const response = await axios.post("http://localhost:3000/user/signup", { username, password });
            const data = response.data;
            window.location.href = "/login";
        } catch (err) {
            setError("An error occurred");
            console.error(err);
            alert("Login failed. Please check your username or password");
        }
    }
    
    
    return (
        <div className="login-container">
            <div className="login-content">
                <h2>Sign up</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">UserName:</label>
                        <input type="text" id="username" name="username" onBlur={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onBlur={(e) => setPassWord(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="submit">SignUp</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
