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
            
        </div>
    )


};

export default TrainingForm;

