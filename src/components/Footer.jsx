// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer animate__animated animate__fadeInUp">
      <div className="footer-content">
        <p>© 2024 INSET University. All rights reserved.</p>
        <div className="footer-links">
          <a href="/ContactUs">Contact Us</a> | 
          <a href="/about">About Us</a> | 
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
