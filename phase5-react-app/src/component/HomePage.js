import React from 'react';
import 'google-fonts'; // Import the google-fonts package

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-container">
        <h1 className="hero-title">Where Nature Meets Innovation</h1>
        <h1 className="hero-subtitle">Cultivating a Flourishing Tomorrow</h1>
      </div>
      <div className="product-container">
        {/* Product items go here */}
        <div className="product-item">
          <img className="product-image" src="product1.jpg" alt="Product 1" />
          <h2 className="product-title">Product 1</h2>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span className="product-price">$19.99</span>
          <button className="product-button">Add to Cart</button>
        </div>
        <div className="product-item">
          <img className="product-image" src="product2.jpg" alt="Product 2" />
          <h2 className="product-title">Product 2</h2>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span className="product-price">$24.99</span>
          <button className="product-button">Add to Cart</button>
        </div>
        <div className="product-item">
          <img className="product-image" src="product3.jpg" alt="Product 3" />
          <h2 className="product-title">Product 3</h2>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span className="product-price">$14.99</span>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
