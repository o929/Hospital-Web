import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | ''>('');
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emailjs.init("7o9FV7q7E2a0Cd7lf"); // Your EmailJS public key
  }, []);

useEffect(() => {
  if (feedbackMessage && feedbackRef.current) {
    const elementPosition = feedbackRef.current.getBoundingClientRect().top + window.pageYOffset;
    const offset = 250; // adjust this value to your header height or whatever space you want
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
}, [feedbackMessage]);


const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // Save the form reference immediately

  emailjs.sendForm("service_gj3n2ss", "template_r22t672", form)
    .then(() => {
      setFeedbackMessage("Your message was successfully sent!");
      setFeedbackType("success");
      form.reset(); // Use saved reference, NOT e.currentTarget.reset()
      setTimeout(() => {
        setFeedbackMessage('');
        setFeedbackType('');
      }, 4000);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      setFeedbackMessage("Failed to send your message. Please try again.");
      setFeedbackType("error");
      setTimeout(() => {
        setFeedbackMessage('');
        setFeedbackType('');
      }, 4000);
    });
};


  return (
      <section id="appointment">

    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Contact Us</h2>
          <p>Schedule an appointment or get in touch with our medical team</p>
        </div>

        {feedbackMessage && (
          <div
          ref={feedbackRef}
            style={{
              textAlign: 'center',
              padding: '10px',
              marginBottom: '20px',
              color: feedbackType === 'success' ? 'green' : 'red',
              backgroundColor: feedbackType === 'success' ? '#eaffea' : '#ffeaea',
              border: `1px solid ${feedbackType === 'success' ? 'green' : 'red'}`,
              borderRadius: '8px',
            }}
          >
            {feedbackMessage}
          </div>
        )}

        <div className="contact-content">
          <form className="contact-form" id="contact-form" onSubmit={sendEmail}>
            <div className="form-card card">
              <h3>Book an Appointment</h3>

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" />
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select id="time" name="time">
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
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  placeholder="Please describe the reason for your visit..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
                  </section>
  );
};

export default Contact;
