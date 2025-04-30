import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Room Today!</h1>
          <p>We connect you with the best rental spaces — fast, easy, and reliable.</p>
          <Link to="/services" className="btn-primary">Explore Services</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Verified Listings</h3>
            <p>All rooms and houses are verified for your safety and satisfaction.</p>
          </div>

          <div className="feature-card">
            <h3>Direct Owner Contact</h3>
            <p>Skip the brokers! Contact property owners directly and save money.</p>
          </div>

          <div className="feature-card">
            <h3>Easy Search & Filters</h3>
            <p>Use smart filters to find exactly what you're looking for — within minutes.</p>
          </div>
        </div>
      </section>

      {/* <section className="cta">
        <h2>Ready to Move In?</h2>
        <p>Sign up now and find your dream space with ease!</p>
        <Link to="/signup" className="btn-secondary">Get Started</Link>
      </section> */}
    </div>
  );
}

export default Home;
