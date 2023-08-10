import React, { useState } from "react";
import './ResetPassword.css'
import { Box, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = async () => {
    try {
   
      const response = await fetch("/password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
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
          Forgot Your Password?
        </Text>
        {/* {error && (
          <Text className="error-message" color="#ff0000" fontSize="14px" marginTop="5px">
            Invalid email
          </Text>
        )} */}
        <form className="reset-form" onSubmit={handleResetPassword}>
          <FormControl marginBottom="10px">
            <FormLabel>Email</FormLabel>
            <Input
              textAlign="center"
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="user@example.com"
              onChange={handleEmailChange}
            />
          </FormControl>
          <button type="submit" colorScheme="blue" fontWeight="bold">
            Send Email
          </button>
        </form>
      </Box>
    </Box>
  );
}

export default ResetPassword;