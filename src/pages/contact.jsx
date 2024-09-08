import { useState } from 'react';
import '../styles/contact.css'; // Importing styles 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatusMessage('There was an error sending the message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('There was an error sending the message.');
    }
  };

  return (
    <section className="contact-section">
      <div id="contact-headline"><h1>Contact Me</h1></div>
      <div className="contact-details">
        <strong>Email</strong> danielleboenisch@gmail.com<br/>
        <strong>Phone:</strong> 573-489-6938
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
     
        <label className="label">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
     
        <button type="submit" id="messageButton">Send Message</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </section>
  );
};

export default Contact;
