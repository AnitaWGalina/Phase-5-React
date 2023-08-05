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

};
};


return (
    <div>
        
    </div>
)
export default LandForm;
