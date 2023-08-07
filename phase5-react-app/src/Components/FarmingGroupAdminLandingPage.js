import React from 'react';
import { Link } from 'react-router-dom';
import './FarmingGroupAdminLandingPageCSS.css';


const ParentLink = ({ label, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`parent-link ${isHovered ? 'hovered' : ''}`}
    >
      <Link to="#" className="parent-link-label">
        {label}
      </Link>
      {isHovered && <div className="child-link-container">{children}</div>}
    </div>
  );
};

const ChildLink = ({ to, label }) => (
  <Link to={to} className="child-link" >
    {label}
  </Link>
);

const FarmingGroupAdminLandingPageCSS = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <div className="product-service-container">
          <div className="product-service">
            <ParentLink label="Products">
              <ChildLink to="/products" label="View Products" />
            </ParentLink>
            <ParentLink label="Services">
              <ChildLink to="/enlist_produce" label="Sell Produce" />
              <ChildLink to="/land_list" label="Land Operations" />
              <ChildLink to="/land_form" label="Upload Land" />
              <ChildLink to="/training" label="Training" />
            </ParentLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingGroupAdminLandingPageCSS;