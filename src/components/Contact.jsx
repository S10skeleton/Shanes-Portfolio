import React, { useState } from 'react';
import '../Styles/Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your message!');
  };

  return (
    <div className='contact-page'>
      <h2 className='contacth2'>Feel Free to Contact Me 🙂</h2>
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='email'>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='message'>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
