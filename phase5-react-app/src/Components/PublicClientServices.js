import React from 'react';
import { Link } from 'react-router-dom';
import LandList from './LandList';

const PublicClientServices = () => {
  return (
    <div>
      <h1>Services for Public Clients</h1>
      <ul>
        <li>
          <Link to="/lease-land">Lease Land</Link>
        </li>
        <li>
          <Link to="/rent-land">Rent Land/Purchase Land</Link>
        </li>
        {/* Add other child links for other services as needed */}
      </ul>
      <hr />
      <LandList />
    </div>
  );
};

export default PublicClientServices;
