import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './UserProfile.css';
import { useAuth } from "./context/AuthContext";
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Flex
} from '@chakra-ui/react';

const UserProfile = () => {
  const { user, logout } = useAuth(); // Get the user from the AuthContext
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
    fetch(`https://agribix.onrender.com/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(userProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("User profile updated:", data);
        logout()
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };

  if (!user) {
    return <Box
              border="1px solid red"
              backgroundColor="rgba(255, 0, 0, 0.1)"
              padding="1rem"
              borderRadius="4px"
            >
            Please log in to view this page.
            </Box>
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <Box
              border="1px solid red"
              backgroundColor="rgba(255, 0, 0, 0.1)"
              padding="1rem"
              borderRadius="4px"
            >
            User not found.
            </Box>
  }

  return (
    <Box className="update-container">
      <Box className="update-form-container">
        <Text fontSize="2rem" fontWeight="bold" marginBottom="20px" textAlign="center">
          UPDATE PROFILE
        </Text>
        {/* {error && (
          <Text className="error-message" color="#ff0000" fontSize="14px" marginTop="5px" textAlign="center">
            Failed to update account
          </Text>
        )} */}
        <form className="update-form" onSubmit={handleSubmit}>
          <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
            <FormControl marginBottom="10px" marginRight="20px">
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                name="name"
                value={userProfile.name}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl marginBottom="10px" marginRight="20px">
              <FormLabel>Email:</FormLabel>
              <Input
                type="text"
                name="email"
                value={userProfile.email}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl marginBottom="10px">
              <FormLabel>Phone:</FormLabel>
              <Input
                type="text"
                name="phone_number"
                value={userProfile.phone_number}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Flex>

          <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
            <FormControl marginBottom="10px" marginRight="10px">
              <FormLabel>Location:</FormLabel>
              <Input
                type="text"
                name="location"
                value={userProfile.location}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl marginBottom="10px" marginRight="10px">
              <FormLabel>Type of User</FormLabel>
              <Select name="status" value={userProfile.status} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Farming Group Administrator">Farming Group Administrator</option>
                <option value="Public Client">Public Client</option>
              </Select>
            </FormControl>

            {userProfile.status !== 'Select...' && userProfile.status !== 'Public Client' && (
              <FormControl marginBottom="10px" marginRight="10px">
                <FormLabel>Group Size:</FormLabel>
                <Input
                  type="number"
                  name="group_number"
                  value={userProfile.group_number}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            )}
          </Flex>

          <FormControl marginBottom="10px">
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              name="password"
              value={userProfile.password}
              onChange={handleChange}
              textAlign="center"
              required
            />
          </FormControl>

          <FormControl marginBottom="10px">
            <FormLabel>Confirm Password:</FormLabel>
            <Input
              type="password"
              name="password_confirmation"
              value={userProfile.password_confirmation}
              onChange={handleChange}
              textAlign="center"
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" fontWeight="bold" /*disabled={!!error}*/>
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UserProfile;
