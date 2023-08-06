import React from 'react';
import Header from './Header';
import ProductItem from './ProductItem';
import ProductSection from './ProductSection'; // Import the new component

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      {/* New ProductSection component with the title and subtitle */}
      <ProductSection />

      <div className="product-container">
        <ProductItem
          imageSrc="product1.jpg"
          alt="Product 1"
          title="Product 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$19.99"
        />
        <ProductItem
          imageSrc="product2.jpg"
          alt="Product 2"
          title="Product 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$24.99"
        />
        <ProductItem
          imageSrc="product3.jpg"
          alt="Product 3"
          title="Product 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$14.99"
        />
      </div>
    </div>
  );
}

export default Home;