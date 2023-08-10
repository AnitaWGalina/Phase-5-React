import React, { useState } from "react";
import './ResetPassword.css'
import { Box, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function NewPassword() {
    const [change, setChange] = useState({
        password: "",
        password_confirmation: "",
      });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setChange({
      ...change,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewPassword = async () => {
    try {
   
      const response = await fetch("/password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({change}),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Box className="reset-container">
      <Box className="reset-form-container">
        <Text fontSize="2rem" fontWeight="bold" marginBottom="20px" textAlign="center">
          Enter New Password
        </Text>
        {/* {error && (
          <Text className="error-message" color="#ff0000" fontSize="14px" marginTop="5px">
            Invalid email
          </Text>
        )} */}
        <form className="reset-form" onSubmit={handleNewPassword}>
            <FormControl marginBottom="10px">
                <FormLabel>Password:</FormLabel>
                <Input
                type="password"
                name="password"
                value={change.password}
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
                value={change.password_confirmation}
                onChange={handleChange}
                textAlign="center"
                required
                />
            </FormControl>
          <button type="submit" colorScheme="blue" fontWeight="bold">
            Change Password
          </button>
        </form>
      </Box>
    </Box>
  );
}

export default NewPassword;