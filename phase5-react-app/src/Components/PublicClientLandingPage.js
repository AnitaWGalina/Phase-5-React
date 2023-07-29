import React from 'react';
import { Link } from 'react-router-dom';

const PublicClientLandingPage = () => {
    return (
        <div>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      );
};

export default PublicClientLandingPage;


