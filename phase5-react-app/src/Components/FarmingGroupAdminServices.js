import React from 'react';
import { Link } from 'react-router-dom';
import LandList from './LandList';

const FarmingGroupAdminServices = () => {
  return (
    <div>
      <h1>Services for Farmers</h1>
      <ul>
        <li>
          <Link to="/enlist-produce">Enlist Produce</Link>
        </li>
        <li>
          <Link to="/lease-land">Lease Land</Link>
        </li>
        <li>
          <Link to="/rent-land">Rent Land</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
      </ul>
      <hr />
      <LandList />
    </div>
  );
};

export default FarmingGroupAdminServices;
