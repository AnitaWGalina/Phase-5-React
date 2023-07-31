import React, { useState } from 'react';

const EnlistProduceForm = () => {
  const [cropCategory, setCropCategory] = useState('');
  const [producePricePerKg, setProducePricePerKg] = useState('');
  const [quantityHarvested, setQuantityHarvested] = useState('');
  const [produceType, setProduceType] = useState('sellLocally');
  const [otherDetails, setOtherDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', cropCategory, producePricePerKg, quantityHarvested, produceType, otherDetails);
  };

  return (
    <div>
      <h1>Enlist Produce</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Category of Crop:
          <input
            type="text"
            value={cropCategory}
            onChange={(e) => setCropCategory(e.target.value)}
            placeholder="e.g Tea, Coffee..."
          />
        </label>
        <label>
          Produce Price per kg:
          <input
            type="text"
            value={producePricePerKg}
            onChange={(e) => setProducePricePerKg(e.target.value)}
          />
        </label>
        <label>
          Quantity Harvested(kg):
          <input
            type="text"
            value={quantityHarvested}
            onChange={(e) => setQuantityHarvested(e.target.value)}
          />
        </label>
        <label>
          Any other details:
          <input
            type="text"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
          />
        </label>
        <label>
          Sell options:
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
