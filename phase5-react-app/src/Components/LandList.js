import React, { useState, useEffect } from 'react';

const LandList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetch('/http://localhost:3000/farming_lands')
      .then((response) => response.json())
      .then((data) => setLands(data))
      .catch((error) => console.error('Error fetching lands:', error));
  }, []);

  return(
    <div>
      <h2>Available Lands for Rent</h2>
      <ul>
        {lands.map((land) => (
          <li key={land.id}>
            <strong>Image:</strong> <img src={land.image} alt={`Land ${land.id}`} />
            <br />
            <strong>Size:</strong> {land.size}
            <br />
            <strong>Location:</strong> {land.location}
            <br />
            <strong>Price:</strong> {land.price}
          </li>
        ))}
      </ul>
    </div>
  )

};

export default LandList;
