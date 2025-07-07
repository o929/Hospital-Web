


import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah mohammed',
      rating: 4,
      text: 'Dr. Ali is an exceptional physician who truly cares about his patients. His thorough approach and genuine concern for my health made all the difference in my treatment.',
      condition: 'Diabetes Management'
    },
    {
      name: 'Ahmed Jaber',
      rating: 5,
      text: 'The best doctor I have ever worked with. Dr. Ali takes the time to listen and explain everything clearly. The staff is also incredibly professional and welcoming.',
      condition: 'Hypertension Care'
    },
    {
      name: 'Khalid Idris',
      rating: 3,
      text: 'Dr. Ali and his team provided outstanding care during my pregnancy. Their attention to detail and compassionate care made this journey so much easier.',
      condition: 'Prenatal Care'
    },
    {
      name: 'Mona Alfatih',
      rating: 5,
      text: 'I have been a patient for over 5 years. Dr. Ali is knowledgeable, patient, and always available when I need medical advice. Highly recommend!',
      condition: 'Preventive Care'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header text-center">
          <h2>What Our Patients Say</h2>
          <p>Real experiences from real patients who trust Dr. Ali with their healthcare</p>
        </div>
        
        <div className="testimonials-grid grid grid-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <div className="testimonial-header">
                <div className="patient-info">
                  <div className="patient-avatar">👤</div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span className="condition">{testimonial.condition}</span>
                  </div>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="t-stat-icon">😊</span>
            <span className="t-stat-number">98%</span>
            <span className="t-stat-label">Patient Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="t-stat-icon">⭐</span>
            <span className="t-stat-number">4.9</span>
            <span className="t-stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="t-stat-icon">🏆</span>
            <span className="t-stat-number">5000+</span>
            <span className="t-stat-label">Happy Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;