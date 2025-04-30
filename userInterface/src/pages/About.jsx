import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>Welcome to Rent Seeker Hub!</h2>
      <p>
        We help you easily find rental rooms, apartments, and houses based on your needs.
        Whether you are a student, working professional, or family, we connect you to the best
        available rental properties nearby.
      </p>

      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to simplify the process of finding affordable and comfortable rental spaces for everyone.
        </p>
      </div>

      <div className="what-we-offer">
        <h3>What We Offer</h3>
        <ul>
          <li>✅ Verified rental listings</li>
          <li>✅ Direct contact with property owners</li>
          <li>✅ Safe and trusted platform</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
