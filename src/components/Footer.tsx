


import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚕️</span>
              <span className="logo-text">Dr. Ali Medical Center</span>
            </div>
            <p className="footer-desc">
              Providing exceptional healthcare services with compassion and expertise. 
              Your health and well-being are our top priorities.
            </p>
            <div className="footer-contact">
              <span>📞 (123) 456-7890</span>
              <span>✉️ info@dralimedical.com</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Dr. Ali</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">General Medicine</a></li>
              <li><a href="#services">Cardiology</a></li>
              <li><a href="#services">Laboratory Services</a></li>
              <li><a href="#services">Emergency Care</a></li>
              <li><a href="#services">Family Medicine</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Office Hours</h4>
            <div className="office-hours">
              <div className="hour-row">
                <span>Mon - Fri</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="hour-row">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="hour-row">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
            </div>
            <div className="emergency-notice">
              <strong>24/7 Emergency Services Available</strong>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Dr. Ali Medical Center. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#hipaa">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;