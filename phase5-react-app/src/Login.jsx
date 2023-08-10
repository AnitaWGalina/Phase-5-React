import "./Login.css";
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // State for storing error message

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your login endpoint with user credentials
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        // console.log(data)
        login(data.user); // Update the user state
        if (data.user.status === "Public Client") {
          navigate("/client_page"); // Redirect to the client page
        } else if (data.user.status === "Farming Group Administrator") {
          navigate("/farmer_page"); // Redirect to the farmer page
        }
        window.alert(`Welcome back ${data.user.name} :D!`);
      })
      .catch((error) => {
        setError(error.message); // Store the error message in state
      });
  };
  return (
    <Box className="login-container">
      <Box className="login-form-container">
        <Text fontSize="2rem" fontWeight="bold" marginBottom="20px" textAlign="center">
          LOGIN
        </Text>
        {error && (
          <Text className="error-message" color="#ff0000" fontSize="14px" marginTop="5px">
            Invalid email or password
          </Text>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <FormControl marginBottom="10px">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl marginBottom="10px">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" fontWeight="bold">
            Login
          </Button>
          <Link to="/password/reset">
            <Text padding="20px" textAlign="right">Forgot your password?</Text>
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
