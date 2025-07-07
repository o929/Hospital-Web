import React from 'react';
import './Hero.css';

import doctorImg from '../assets/doctor.png';

const Hero: React.FC = () => {
  window.onscroll = () => {
    const rollupBtn = document.querySelector('.rollup-btn') as HTMLElement;
    if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) { //the first one is for Safari, the second one is for Chrome, Firefox, IE and Opera
      rollupBtn.style.display = 'block';
    } else {
      rollupBtn.style.display = 'none';
    }
  }
function rollup() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Exceptional Healthcare with Dr. Ali</h1>
            <p className="hero-subtitle">
              Providing compassionate, comprehensive medical care with over 15 years of experience. 
              Your health and well-being are our top priorities.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Patients</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Care</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#appointment" className="btn btn-primary">Book Appointment</a>
              <a href="#services" className="btn btn-white">Our Services</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="doctor-avatar">
<img src={doctorImg} alt="Dr. Ali Yagoub Idris" />
                
              </div>
              <h3>Dr. Ali Yagoub Idris</h3>
              <p>Board Certified Physician</p>
              <div className="credentials">
                <span className="credential">MD, Internal Medicine</span>
                <span className="credential">FACP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='rollup-btn' onClick={rollup}>⬆️</button>
    </section>
  );
};

export default Hero;

