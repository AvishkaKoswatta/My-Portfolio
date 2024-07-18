// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './ContactForm.css'; 


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_uepyz5c', 'template_eruukni', formData, 'B5cXI0ru-8rt1bdzP')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Email sent successfully',
          showConfirmButton: false,
          timer: 1500
        });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      }, (error) => {
        console.error('FAILED...', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed to send email',
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  return (
    <div className="container mt-56">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group6">
          
          <input
            type="text"
            className="form-control6"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group6">
          
          <input
            type="email"
            className="form-control6"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Addres"
            required
          />
        </div>
        <div className="form-group6">
          
          <textarea
            className="form-control6"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="btn6 btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
