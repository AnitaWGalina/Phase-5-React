import React, { useState } from 'react';

const EnlistProduceForm = () => {
  const [productId, setProductId] = useState('');
  const [productUnitPrice, setProductUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', productId, productUnitPrice, quantity);
  };

  return (
    <div>
        
    </div>
  )

};

export default EnlistProduceForm;

