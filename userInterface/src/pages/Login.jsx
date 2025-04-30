// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'; // 👈 Import the CSS file
import axios, { AxiosHeaders, formToJSON } from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.lo
    const api = "http://localhost:3000/api/v1/users/login";
    const fetchData =  await fetch(api, {
      method : "post",
      credentials : 'include',
      headers : {'Content-Type': 'application/json',"Access-Control-Allow-Credentials": true},
      body: JSON.stringify({
        email,
        password
      })
    })


    const fetchedJsonData = await fetchData.json();
    // console.log(fetchedJsonData)
    // console.log(fetchedJsonData.success);
    setEmail(()=> "")
    setPassword(()=> "")
    if(fetchedJsonData.success){
      navigate('/listings', {fetchedJsonData})
    }
    // console.log('Email:', email);
    // console.log('Password:', password);
    
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button  type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
