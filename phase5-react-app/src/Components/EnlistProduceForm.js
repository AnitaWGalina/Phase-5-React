import React, { useState } from 'react';

const EnlistProduceForm = () => {
  const [productId, setProductId] = useState('');
  const [productUnitPrice, setProductUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [produceType, setProduceType] = useState('sellLocally'); // Default to "Sell Locally"

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', productId, productUnitPrice, quantity, produceType);
  };

  return (
    <div>
      <h1>Enlist Produce</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>
        <label>
          Product Unit Price:
          <input
            type="text"
            value={productUnitPrice}
            onChange={(e) => setProductUnitPrice(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Produce Type:
          <select value={produceType} onChange={(e) => setProduceType(e.target.value)}>
            <option value="sellLocally">Sell Locally</option>
            <option value="export">Export Produce</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnlistProduceForm;
