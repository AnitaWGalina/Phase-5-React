import React, { useEffect, useState } from 'react';

const FarmingGroupAdminProducts = () => {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    // Fetch products from the API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);


     

}

export default FarmingGroupAdminProducts;

