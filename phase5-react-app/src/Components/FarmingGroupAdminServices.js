import React from 'react';
import { Link } from 'react-router-dom';

const FarmingGroupAdminServices = () => {

  return (
    <div>
      <h1>Services for Farmers</h1>
      <ul>
        <li>
          <Link to="/enlist-produce">Enlist Produce</Link>
        </li>
        <li>
          <Link to="/lease-land">Lease Land</Link> {/* Add the "lease land" link */}
        </li>
        {/* Add other child links for other services as needed */}
      </ul>
    </div>
  );
};

export default FarmingGroupAdminServices;
