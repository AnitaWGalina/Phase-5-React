import React, { useState, useEffect } from 'react';

const LeaseLandForm = () => {
  const [landLocation, setLandLocation] = useState('');
  const [landSize, setLandSize] = useState('');
  const [operationDuration, setOperationDuration] = useState('');
  const [operationPrice, setOperationPrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [landSizeInPlots, setLandSizeInPlots] = useState('');
  const [landSizeInAcres, setLandSizeInAcres] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log('Lease land form submitted!', landLocation, landSize, operationDuration, operationPrice);
  };

  const handleLandSizeChange = (e) => {
    setLandSize(e.target.value);
    // Convert land size to plots and acres
    const sizeInSquareMeters = parseInt(e.target.value, 10);
    const sizeInPlots = (sizeInSquareMeters / (50 * 100)).toFixed(2);
    const sizeInAcres = (sizeInSquareMeters / 4046.856).toFixed(2);
    setLandSizeInPlots(sizeInPlots);
    setLandSizeInAcres(sizeInAcres);
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
          Land Location (Town & City):
          <input
            type="text"
            value={landLocation}
            onChange={(e) => setLandLocation(e.target.value)}
            placeholder="e.g. Nairobi, Limuru..."
          />
        </label>
        <label>
          Land Size (in square meters):
          <input
            type="text"
            value={landSize}
            onChange={handleLandSizeChange}
          />
        </label>
        <div>
          {landSizeInPlots && <p>Land Size in Plots: {landSizeInPlots}</p>}
          {landSizeInAcres && <p>Land Size in Acres: {landSizeInAcres}</p>}
        </div>
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

      {/* Google Maps Link */}
      {landLocation && (
        <a
          href={`https://www.google.com/maps/place/${encodeURIComponent(landLocation)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png"
            alt="Google Pin"
          />
        </a>
      )}
    </div>
  );
};

export default LeaseLandForm;
