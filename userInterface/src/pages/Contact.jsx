import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p>
        📧 Email: <a href="mailto:ashumendra@example.com">ashumendra@example.com</a>
      </p>
      <p>
        💼 LinkedIn: <a href="https://www.linkedin.com/in/ashumendra" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/ashumendra
        </a>
      </p>
    </div>
  );
};

export default Contact;
