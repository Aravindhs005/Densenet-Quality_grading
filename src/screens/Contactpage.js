import React, { useState } from 'react';
import './styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>

      <div className="contact-container">
        <div className="contact-image">
            <img src="https://san-j.com/wp-content/uploads/2024/02/01-healthiest-fruits-vegetables-REV02.jpg" alt="Contact" />
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Name'
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='email'
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder='message'
                required
              />
            </div>

            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>

        </div>
        
        
      </div>
    </div>
  );
};

export default ContactPage;
