import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    const navigate = useNavigate()
    function redirectToLogin(){
        navigate('/login')
    }
    function redirectToSignup(){
        navigate('/signup')
    }

  return (
    <nav className="navbar">
      <div className="navbar-logo"><span>Rent </span> Seeker Hub
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        {/* <li><a href="/contact">Contact</a></li> */}
      </ul>
      <div className="navbar-auth">
        <button onClick={redirectToLogin} className="login-btn">Login</button>
        <button onClick={redirectToSignup} className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
