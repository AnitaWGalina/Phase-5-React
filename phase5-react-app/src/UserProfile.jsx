
import React, { useState, useEffect } from "react";
import './UserProfile.css';

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch('')
      .then((response) => response.json())
      .then((data) => {
        setUserProfile(data); 
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        setLoading(false); // Set loading to false on error as well
      });
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserProfile((prevUserProfile) => ({
      ...prevUserProfile,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Send updated user profile data to the backend for saving
    fetch('', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User profile updated:", data);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>User profile not found.</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userProfile.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userProfile.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone_number"
            value={userProfile.phone_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Group Number:</label>
          <input
            type="number"
            name="group_number"
            value={userProfile.group_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userProfile.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={userProfile.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={userProfile.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Type of User:</label>
          <select
            name="type_of_user"
            value={userProfile.type_of_user}
            onChange={handleInputChange}
          >
            <option value="Farming Group Admnistration">Farming Group Admnistration</option>
            <option value="Public Client">Public Client</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
