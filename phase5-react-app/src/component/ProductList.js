import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  // Sample product data. You can replace this with your own array of products.
  const products = [
    {
      imageSrc: 'path/to/image1.jpg',
      alt: 'Product 1',
      title: 'Product 1',
      description: 'Description of Product 1',
      price: '$19.99',
    },
    {
      imageSrc: '/Users/mpchege/Moringa/Phase-5-React/phase5-react-app/src/component/jonathan-kemper-CbZh3kaPxrE-unsplash.jpg',
      alt: 'Product 2',
      title: 'Product 2',
      description: 'Description of Product 2',
      price: '$29.99',
    },
    // Add more product objects as needed.
  ];

  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Map through the products array and render a ProductItem for each product */}
      {products.map((product, index) => (
        <ProductItem
          key={index}
          imageSrc={product.imageSrc}
          alt={product.alt}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </section>
  );
};

export default ProductList;
