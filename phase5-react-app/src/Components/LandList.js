import React, { useState, useEffect } from 'react';

const LandList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetch('/api/lands')
      .then((response) => response.json())
      .then((data) => setLands(data))
      .catch((error) => console.error('Error fetching lands:', error));
  }, []);

};

export default LandList;
