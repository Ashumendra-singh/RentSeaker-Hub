import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We make renting easy, secure, and convenient for you.</p>
      </div>

      <div className="services-cards">
        <div className="service-card">
          <h2>Find Rooms Easily</h2>
          <p>Browse hundreds of verified rooms and houses for rent according to your needs and budget.</p>
        </div>

        <div className="service-card">
          <h2>List Your Property</h2>
          <p>Are you a property owner? List your rental property with us and reach thousands of tenants instantly.</p>
        </div>

        <div className="service-card">
          <h2>Roommate Finder</h2>
          <p>Need a roommate? Our platform helps you connect with people looking for shared accommodations.</p>
        </div>

        <div className="service-card">
          <h2>Verified Listings</h2>
          <p>Every property listing goes through a strict verification process to ensure your safety and trust.</p>
        </div>

        <div className="service-card">
          <h2>Direct Communication</h2>
          <p>Contact property owners directly without any brokers or hidden charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
