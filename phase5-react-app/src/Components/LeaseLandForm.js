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
            {/* Form fields and input elements */}
            <button type="submit">Submit</button>
          </form>
        </div>
      );
};

export default LeaseLandForm;
