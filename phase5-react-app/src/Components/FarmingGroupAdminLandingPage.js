import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPages.css';
import { useAuth } from '../context/AuthContext';
import { Box } from '@chakra-ui/react';

const ParentLink = ({ label, children }) => {
  const { user } = useAuth();
  const [isHovered, setIsHovered] = React.useState(false);

  if (!user) {
    return <Box
              border="1px solid red"
              backgroundColor="rgba(255, 0, 0, 0.1)"
              padding="1rem"
              borderRadius="4px"
            >
            Please log in to view this page.
            </Box>
  }

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

const FarmingGroupAdminLandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-text">
        <h1>Bloom with Us: Cultivating Health and Happiness</h1>
      </div>
      <div className="landing-page-content">
        <div className="product-service-container">
          <div className="product-service">
            <ParentLink label="Products">
              <ChildLink to="/products" label="View Products" />
            </ParentLink>
            <ParentLink label="Services">
              <ChildLink to="/enlist_produce" label="Sell Produce" />
              <ChildLink to="/land_list" label="View Land" />
              <ChildLink to="/land_form" label="Upload Land" />
              <ChildLink to="/training" label="Training" />
            </ParentLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingGroupAdminLandingPage;