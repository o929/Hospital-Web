import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="doctor-profile">
              <div className="profile-avatar">👨‍⚕️</div>
              <div className="profile-info">
                <h3>Dr. Ali Rahman</h3>
                <p>Board Certified Internal Medicine</p>
                <div className="certifications">
                  <span className="cert">MD - Johns Hopkins</span>
                  <span className="cert">Residency - Mayo Clinic</span>
                  <span className="cert">FACP Certified</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h2>About Dr. Ali</h2>
            <p className="about-intro">
              With over 15 years of experience in internal medicine, Dr. Ali Rahman is dedicated to 
              providing exceptional, patient-centered healthcare. His approach combines cutting-edge 
              medical knowledge with compassionate care.
            </p>
            
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎓</span>
                <div>
                  <h4>Education & Training</h4>
                  <p>Medical Degree from Johns Hopkins University, Internal Medicine Residency at Mayo Clinic</p>
                </div>
              </div>
              
              <div className="highlight">
                <span className="highlight-icon">🏆</span>
                <div>
                  <h4>Awards & Recognition</h4>
                  <p>Top Doctor Award 2023, Patient Choice Award, Excellence in Internal Medicine</p>
                </div>
              </div>
              
              <div className="highlight">
                <span className="highlight-icon">🔬</span>
                <div>
                  <h4>Specializations</h4>
                  <p>Preventive Medicine, Chronic Disease Management, Cardiovascular Health</p>
                </div>
              </div>
            </div>
            
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive, compassionate healthcare that empowers patients to achieve 
                optimal health and wellness. We believe in building lasting relationships based on 
                trust, respect, and clinical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

