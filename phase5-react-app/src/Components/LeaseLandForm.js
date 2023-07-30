import React, { useState, useEffect } from 'react';

const LeaseLandForm = () => {
  const [typeOfOperation, setTypeOfOperation] = useState('');
  const [landSize, setLandSize] = useState('');
  const [operationDuration, setOperationDuration] = useState('');
  const [operationPrice, setOperationPrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log('Lease land form submitted!', typeOfOperation, landSize, operationDuration, operationPrice);
  };

  useEffect(() => {
    // Calculate the expiration date when operationDuration changes
    if (operationDuration) {
      const currentDate = new Date();
      const durationInMonths = parseInt(operationDuration, 10);
      const expirationDate = new Date(currentDate.setMonth(currentDate.getMonth() + durationInMonths));
      setExpirationDate(expirationDate.toDateString());
    } else {
      setExpirationDate('');
    }
  }, [operationDuration]);

  return (
    <div>
      <h2>Lease Land Form</h2>
      <form onSubmit={handleSubmit}>
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
          Operation Duration (in months):
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
        {expirationDate && <p>Lease Expiration Date: {expirationDate}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaseLandForm;
