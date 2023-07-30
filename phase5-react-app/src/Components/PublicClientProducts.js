import React, { useEffect, useState } from 'react';

const PublicClientProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div>
      <h1>Products Available</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.ProductName}</p>
            <p>Price: ${product.ProductPrice}</p>
            {/* Add the image here using product.ProductImage */}
          </li>
        ))}
      </ul>
    </div>
  );

};

export default PublicClientProducts;

