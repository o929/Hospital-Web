

import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="appointment" className="contact section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Contact Us</h2>
          <p>Schedule an appointment or get in touch with our medical team</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>123 Medical Center Drive<br />Healthcare District<br />New York, NY 10001</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">Office: (123) 456-7890</a><br />
                <a href="tel:+1234567891">Emergency: (123) 456-7891</a>
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:omaryagoub96@gmail.com">info@dralimedical.com</a><br />
                <a href="mailto:omaryagoub96@gmail.com">appointments@dralimedical.com</a>
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Office Hours</h3>
              <div className="hours">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-card card">
              <h3>Book an Appointment</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Age</label>
                  <input type="number" id="date" name="date" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <select id="time" name="time" required>
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="reason">Reason for Visit</label>
                  <textarea id="reason" name="reason" rows={4} placeholder="Please describe the reason for your visit..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;