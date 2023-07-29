import React, { useEffect, useState } from 'react';


const PublicClientProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  

}

export default PublicClientProducts;

