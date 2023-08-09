import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
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
    setName(user ? user.name : '')
    setEmail(user ? user.email : '')
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

          <Button type="submit" colorScheme="blue" fontWeight="bold">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;