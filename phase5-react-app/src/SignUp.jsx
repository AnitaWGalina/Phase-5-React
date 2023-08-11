import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
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

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    status: "Select...",
    email: "",
    phone_number: "",
    location: "",
    group_number: 0,
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    // Validate form fields (additional validation can be added)
    if (user.password !== user.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to create user. Please try again.");
        }
        return resp.json();
      })
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        setUser(data.user);
        window.alert(`Successfully created an account for ${user.name}! XD`);
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message); // Store the error message in state
      });
      console.log(error);
  };

  return (
    <Box className="signup-container">
      <Box className="signup-form-container">
        <Text fontSize="2rem" fontWeight="bold" marginBottom="20px" textAlign="center">
          SIGNUP
        </Text>
        {error && (
          <Text className="error-message" color="#ff0000" fontSize="14px" marginTop="5px" textAlign="center">
            {error}
          </Text>
        )}
        <form className="signup-form" onSubmit={handleSubmit}>
          <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
            <FormControl marginBottom="10px" marginRight="20px">
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                id="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl marginBottom="10px" marginRight="20px">
              <FormLabel>Email:</FormLabel>
              <Input
                type="text"
                id="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl marginBottom="10px">
              <FormLabel>Phone:</FormLabel>
              <Input
                type="text"
                id="phone_number"
                value={user.phone_number}
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
                id="location"
                value={user.location}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl marginBottom="10px" marginRight="10px">
              <FormLabel>Type of User</FormLabel>
              <Select id="status" value={user.status} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Farming Group Administrator">Farming Group Administrator</option>
                <option value="Public Client">Public Client</option>
              </Select>
            </FormControl>

            {user.status !== 'Select...' && user.status !== 'Public Client' && (
              <FormControl marginBottom="10px" marginRight="10px">
                <FormLabel>Group Size:</FormLabel>
                <Input
                  type="number"
                  id="group_number"
                  value={user.group_number}
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
              id="password"
              value={user.password}
              onChange={handleChange}
              textAlign="center"
              required
            />
          </FormControl>

          <FormControl marginBottom="10px">
            <FormLabel>Confirm Password:</FormLabel>
            <Input
              type="password"
              id="password_confirmation"
              value={user.password_confirmation}
              onChange={handleChange}
              textAlign="center"
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" fontWeight="bold" disabled={!!error}>
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default SignUpForm;