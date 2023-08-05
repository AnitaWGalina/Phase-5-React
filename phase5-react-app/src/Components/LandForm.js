import React, { useState } from 'react';

function LandForm() {
    const [userName, setUserName] = useState('');
    const [landImage, setLandImage] = useState('');
    const [landDescription, setLandDescription] = useState('');
    const [sizeInAcres, setSizeInAcres] = useState('');

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
};


return (
    <div>

    </div>
)
export default LandForm;
