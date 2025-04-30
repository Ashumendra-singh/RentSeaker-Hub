import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ----------------------------------------------------------
    console.log(formData)
    const api = "http://localhost:3000/api/v1/users/register";
    const fetchData =  await fetch(api, {
      method : "post",
      credentials : 'include',
      headers : {'Content-Type': 'application/json',"Access-Control-Allow-Credentials": true},
      body: JSON.stringify({
        "name": formData.name,
        "email": formData.email,
        "password":formData.password
      })
    })


    const fetchedJsonData = await fetchData.json();
    console.log(fetchedJsonData)
    // console.log(fetchedJsonData.success);
    setEmail(()=> "")
    setPassword(()=> "")


    // ------------------------------------------------------

    // Here, you would typically send the data to your backend API
    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <input 
          type="text" 
          name="name" 
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
