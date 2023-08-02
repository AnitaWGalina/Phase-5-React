import React, { useState, useEffect } from 'react';

const TrainingForm = () => {
  const [dateOfTraining, setDateOfTraining] = useState('');
  const [numberOfTrainees, setNumberOfTrainees] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [registrationFee, setRegistrationFee] = useState(null); // Initialize with null

  useEffect(() => {
    // Fetch registration fee from the backend
    fetch('/api/registration-fee')
      .then((response) => response.json())
      .then((data) => setRegistrationFee(data.registrationFee))
      .catch((error) => {
        console.error('Error fetching registration fee:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalCost = numberOfTrainees * registrationFee;
    console.log('Training form submitted!', dateOfTraining, numberOfTrainees, totalCost);
  };

  return (
    <div>
      <h2>Training Form</h2>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Date of Training:
            <input
              type="date"
              value={dateOfTraining}
              onChange={(e) => setDateOfTraining(e.target.value)}
            />
          </label>
          <label>
            Number of Trainees:
            <input
              type="number"
              value={numberOfTrainees}
              onChange={(e) => setNumberOfTrainees(e.target.value)}
            />
          </label>
          {registrationFee !== null && <p>Total Cost: {numberOfTrainees * registrationFee}</p>}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            Unlock your full potential as a farmer with our expert training services. We are
            dedicated to empowering agricultural enthusiasts like you by equipping you with the
            knowledge and skills to thrive in modern farming. Our comprehensive programs cover
            everything from sustainable practices and innovative techniques to efficient resource
            management. Join us, and together, we'll cultivate success and take your farming
            endeavors to new heights. Embrace the future of farming with confidence – start your
            journey with us today.
          </p>
          {registrationFee !== null && <p>Registration Fee: {registrationFee}</p>}
          <button onClick={() => setShowForm(true)}>Enroll for Training</button>
        </div>
      )}
    </div>
  );
};

export default TrainingForm;
