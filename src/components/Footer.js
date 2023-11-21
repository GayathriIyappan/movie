
import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscription submitted!');
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Get updates on the latest movies, reviews, and special offers.</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" style={{ width: '100px' }}>Subscribe</button>
          </form>
        </div>
        <p className="footer-info">
          © {new Date().getFullYear()} Your Movie Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
