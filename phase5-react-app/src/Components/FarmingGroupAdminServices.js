import React from 'react';
import { Link } from 'react-router-dom';

const FarmingGroupAdminServices = () => {
  // Implement forms for services here
  return (
    <div>
      <h1>Services for Farmers</h1>
      <ul>
        <li>
          <Link to="/enlist-produce">Enlist Produce</Link>
        </li>
        {/* Add other child links for other services as needed */}
      </ul>
    </div>
  );
};

export default FarmingGroupAdminServices;
