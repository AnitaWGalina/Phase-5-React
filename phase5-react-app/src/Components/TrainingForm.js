import React, { useState } from 'react';

const TrainingForm = () => {
    const [dateOfTraining, setDateOfTraining] = useState('');
    const [numberOfTrainees, setNumberOfTrainees] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const registrationFee = 7000;
      const totalCost = numberOfTrainees * registrationFee;
      console.log('Training form submitted!', dateOfTraining, numberOfTrainees, totalCost);
    };

    return(
     <div>
            <h2>Training Form</h2>
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
        <button type="submit">Submit</button>
      </form>
     </div>
    );


};

export default TrainingForm;

