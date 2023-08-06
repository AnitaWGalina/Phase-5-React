import React from 'react';

const About = () => {
  return (
    <div className="container" style={containerStyle}>
      <div className="content" style={contentStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          AGRIBIX IS A BUMBLING MANAGEMENT COMPANY FOCUSED ON AMELIORATING THE
          LIVES OF FARMERS ACROSS KENYA .<br /> AGRIBIX SEEKS TO BRIDGE THE GAP
          BETWEEN FARMERS AND THE AGRICULTURE MARKET BY EMPOWERING THEM THROUGH
          EFFICIENT AND EFFECTIVE MICRO-GROUPS. <br />
          THIS IS DONE IN AN EFFORT TO INCREASE THEIR AGRICULTURAL YIELD BY
          PROVIDING THEM WITH NESTLING SERVICES SUCH AS MARKETING OF PRODUCTS, <br />
          EXPORT AND SALE  OF YIELD .<br />
          IN ADDITION, FARMERS WILL HAVE AN OPPORTUNITY TO PURCHASE FARM MATERIAL <br />
          AND UTILITIES THROUGH OUR WEBSITE.
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundImage: "url('https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contentStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '40px',
  maxWidth: '600px',
  margin: '20px',
};

const headingStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  textAlign: 'justify',
};

export default About;
