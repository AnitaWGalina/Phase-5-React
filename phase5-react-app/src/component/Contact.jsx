import React, { useState } from 'react';
import './Contact.css';
import { useAuth } from '../context/AuthContext';

const Contact = () => {
  const { user } = useAuth()
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Your feedback has been sent and received`);
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;