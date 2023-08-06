import React from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="background-image" style={backgroundImageStyle} />
      <div className="contact-form mt-5" style={contactFormStyle}>
        <h2 className="mb-3">React Contact Form Component Example</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  position: 'relative',
};

const backgroundImageStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundImage:
    "url('https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
  zIndex: -1,
};

const contactFormStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '20px',
  maxWidth: '600px',
  margin: '20px',
};

export default ContactForm;

