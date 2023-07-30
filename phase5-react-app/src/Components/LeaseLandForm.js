import React, { useState } from 'react';

const LeaseLandForm = () => {
  const [landId, setLandId] = useState('');
  const [typeOfOperation, setTypeOfOperation] = useState('');
  const [landSize, setLandSize] = useState('');
  const [operationDuration, setOperationDuration] = useState('');
  const [operationPrice, setOperationPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log('Lease land form submitted!', landId, typeOfOperation, landSize, operationDuration, operationPrice);
  };

  return (
    <div>
      <h2>Lease Land Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Land ID:
          <input
            type="text"
            value={landId}
            onChange={(e) => setLandId(e.target.value)}
          />
        </label>
        <label>
          Type of Operation (Lease/Rent):
          <input
            type="text"
            value={typeOfOperation}
            onChange={(e) => setTypeOfOperation(e.target.value)}
          />
        </label>
        <label>
          Land Size:
          <input
            type="text"
            value={landSize}
            onChange={(e) => setLandSize(e.target.value)}
          />
        </label>
        <label>
          Operation Duration:
          <input
            type="text"
            value={operationDuration}
            onChange={(e) => setOperationDuration(e.target.value)}
          />
        </label>
        <label>
          Operation Price:
          <input
            type="text"
            value={operationPrice}
            onChange={(e) => setOperationPrice(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaseLandForm;
