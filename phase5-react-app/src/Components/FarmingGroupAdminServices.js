import React from 'react';
import { Link } from 'react-router-dom';
import LandList from './LandList';

const FarmingGroupAdminServices = () => {
  const servicesContainerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  };

  const servicesHeadingStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  };

  const servicesListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const servicesListItemStyle = {
    marginBottom: '10px',
  };

  const servicesLinkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  };

  const servicesLinkHoverStyle = {
    color: '#0056b3',
  };

  const servicesHrStyle = {
    marginTop: '20px',
    border: 'none',
    borderTop: '1px solid #ccc',
  };

  return (
    <div style={servicesContainerStyle}>
      <h1 style={servicesHeadingStyle}>Services for Farmers</h1>
      <ul style={servicesListStyle}>
        <li style={servicesListItemStyle}>
          <Link to="/enlist-produce" style={servicesLinkStyle}>
            Enlist Produce
          </Link>
        </li>
        <li style={servicesListItemStyle}>
          <Link to="/lease-land" style={servicesLinkStyle}>
            Lease Land
          </Link>
        </li>
        <li style={servicesListItemStyle}>
          <Link to="/rent-land" style={servicesLinkStyle}>
            Rent Land
          </Link>
        </li>
        <li style={servicesListItemStyle}>
          <Link to="/training" style={servicesLinkStyle}>
            Training
          </Link>
        </li>
      </ul>
      <hr style={servicesHrStyle} />
      <LandList />
    </div>
  );
};

export default FarmingGroupAdminServices;
