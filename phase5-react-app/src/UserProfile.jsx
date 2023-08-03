import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './UserProfile.css';
import { useAuth } from "./context/AuthContext";

const UserProfile = () => {
  const { user } = useAuth(); // Get the user from the AuthContext
  const token = localStorage.getItem('jwt')
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) return; // Make sure the user is logged in before fetching their profile

    setUserProfile({
      name: user.name || "",
      status: user.status || "Select...",
      email: user.email || "",
      phone_number: user.phone_number || "",
      location: user.location || "",
      group_number: user.group_number || 0,
      password: user.password || "",
      password_confirmation: user.password_confirmation ||"",
    });

    setLoading(false);
  }, [user]);

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(userProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User profile updated:", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

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
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={userProfile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={userProfile.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Group Number:</label>
          <input
            type="number"
            name="group_number"
            value={userProfile.group_number}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userProfile.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password_confirmation"
            value={userProfile.password_confirmation}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userProfile.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password_confirmation"
            value={userProfile.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={userProfile.location}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label>Type of User:</label>
          <select
            name="type_of_user"
            value={userProfile.status}
            onChange={handleChange}
          >
            <option value="Farming Group Admnistrator">Farming Group Admnistrator</option>
            <option value="Public Client">Public Client</option>
          </select>
        </div> */}
        <div>
          <label>Type of User</label>
          <select
            name="status"
            onChange={handleChange}
            value={userProfile.status}
            type="text"
          >
            <option value="">Select...</option>
            <option value="Farming Group Administrator">
              Farming Group Administrator
            </option>
            <option value="Public Client">Public Client</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
