

import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('You are subscribed with our newsletter services!');
      setEmail(''); 
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-sections">
            <div className="footer-section">
              <h3 style={{ fontFamily: 'inherit' }}>INFORMATION</h3>
              <ul>
                <li><Link to="/About">About Us</Link></li>
                <li><a href="##">Cancellation Policy</a></li>
                <li><a href="##">Grievance Redressal Policy</a></li>
                <li><a href="##">Return/Refund Policy</a></li>
                <li><a href="##">Shipping Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Subscribe to Our Newsletter</h3>
              
              <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit"><i className="fa fa-arrow-right"></i></button>
            </form>
            {/* Display the message */}
            {message && <p className="thank-you-message">{message}</p>}
              
              <h3 style={{marginTop:'34px'}}>Follow on Social Media</h3>
              <div className="social-icons" style={{ display: 'flex', gap: '17px', alignItems: 'center', marginLeft: '55px' }}>
                <a href="https://www.facebook.com/patanjaliayurved.net/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/patanjaliayurved/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/user/PatanjaliAyurved" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://in.pinterest.com/patanjaliayurved/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
                <a href="https://twitter.com/pypatanjali" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>CONTACT US</h3>
              <p>Patanjali Ayurved Limited, Haridwar, Uttarakhand - 249405</p>
              <p>1860-1800-180 & 01334-610111</p>
              <p>Timing: Mon to Sat 6 am to 8 pm</p>

              <p><a href="mailto:customercare@orderme.co.in" style={{ color: '#171717', fontSize: '15px', fontWeight: '400', lineHeight: '20px' }}>customercare@orderme.co.in</a></p>
              <div className="download-apps">
                <a href="https://apps.apple.com/in/app/orderme/id1514983026" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.patanjaliayurved.net/media/images/apple-store.png" alt="Get it on Google Play" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.patanjali.orderme" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.patanjaliayurved.net/media/images/google-play.png" alt="Download on the App Store" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p style={{color:'black'}}>&copy; 2024 Patanjali Ayurved Limited All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

