import React from 'react';
import './Services.css';

const Services: React.FC = () => {
    
    const toggelPhoneNo = () => {
      const phoneNo = document.getElementById("phone-No");
      if (phoneNo) {
        phoneNo.style.display = phoneNo.style.display === "block" ? "none" : "block";
      }
    }
  const services = [
    {
      icon: '🩺',
      title: 'General Medicine',
      description: 'Comprehensive primary care services including routine check-ups, preventive care, and treatment of common illnesses.'
    },
    {
      icon: '❤️',
      title: 'Cardiology',
      description: 'Advanced heart care services including cardiac screenings, EKGs, and management of cardiovascular conditions.'
    },
    {
      icon: '🔬',
      title: 'Laboratory Services',
      description: 'On-site laboratory testing with quick results for blood work, urinalysis, and other diagnostic tests.'
    },
    {
      icon: '💉',
      title: 'Vaccinations',
      description: 'Complete vaccination services for children and adults, including flu shots and travel vaccines.'
    },
    {
      icon: '🏥',
      title: 'Emergency Care',
      description: '24/7 emergency medical services for urgent health conditions and after-hours care.'
    },
    {
      icon: '👥',
      title: 'Family Medicine',
      description: 'Comprehensive healthcare for the entire family, from pediatrics to geriatric care.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Medical Services</h2>
          <p>Comprehensive healthcare services designed to meet all your medical needs</p>
        </div>
        
        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#appointment" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
        
        <div className="services-cta text-center">
          <h3>Need a specific service not listed?</h3>
          <p>Contact us to discuss your healthcare needs</p>
          <a href="#contact" onClick={toggelPhoneNo} className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Services;

