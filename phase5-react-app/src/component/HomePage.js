import React from 'react';
import Header from './Header';
import ProductSection from './ProductSection';
import ServicesSection from './ServicesSection'; // Import the new ServicesSection component
import './Homepage.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <ProductSection />
      <ServicesSection /> {/* Include the ServicesSection component */}
    </div>
  );
}

export default Home;
