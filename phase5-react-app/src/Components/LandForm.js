import React, { useState } from 'react';

function LandForm() {
  const [userName, setUserName] = useState('');
  const [landImage, setLandImage] = useState('');
  const [landDescription, setLandDescription] = useState('');
  const [sizeInAcres, setSizeInAcres] = useState('');
  const [plotCount, setPlotCount] = useState('');

  const calculatePlotCount = (acres) => {
    // Assuming a plot size of 50 * 100 feet, calculate plot count
    const plotsInOneAcre = 8; // Constant for plot size 50 * 100 feet
    return acres * plotsInOneAcre;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: userName,
      image: landImage,
      description: landDescription,
      size_in_acres: sizeInAcres,
    };

    try {
      const response = await fetch('/api/addFarmingLand', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, maybe show a success message
        console.log('Farming land added successfully');
      } else {
        // Handle error, maybe show an error message
        console.error('Error adding farming land');
      }
    } catch (error) {
      console.error('Error adding farming land', error);
    }
  };

  const handleSizeInAcresChange = (e) => {
    const acres = parseFloat(e.target.value);
    setSizeInAcres(acres);
    if (!isNaN(acres)) {
      const calculatedPlotCount = calculatePlotCount(acres);
      setPlotCount(calculatedPlotCount);
    } else {
      setPlotCount('');
    }
  };

  return (
    <div>
      <h2>Add Farming Land</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Land Image (URL or Google Pin):</label>
          <input
            type="text"
            value={landImage}
            onChange={(e) => setLandImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Land Description:</label>
          <input
            type="text"
            value={landDescription}
            onChange={(e) => setLandDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Size in Acres:</label>
          <input
            type="number"
            value={sizeInAcres}
            onChange={handleSizeInAcresChange}
            required
          />
        </div>
        <p>Plot size: 50 * 100 feet</p>
        {plotCount && <p>{plotCount} plots</p>}
        <button type="submit">Add Farming Land</button>
      </form>
    </div>
  );
}

export default LandForm;
