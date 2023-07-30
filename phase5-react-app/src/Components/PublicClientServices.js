import React from 'react';
import { Link } from 'react-router-dom';

const PublicClientServices = () => {
  return (
    <div>
      <h1>Services for Public Clients</h1>
      <ul>
        <li>
          <Link to="/lease-land">Lease Land</Link>
        </li>
        {/* Add other child links for other services as needed */}
      </ul>
    </div>
  );
};

export default PublicClientServices;
