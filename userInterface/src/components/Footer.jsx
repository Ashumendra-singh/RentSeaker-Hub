import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      
      <div className="cta-footer">
        <h2>Ready to Move In?</h2>
        <p>Sign up now and find your dream space with ease!</p>
        <Link to="/signup" className="btn-secondary">Get Started</Link>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Rent Seeker Hub. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
