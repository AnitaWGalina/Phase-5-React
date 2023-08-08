import React from "react";
import {Box, Button, Text, Flex, Avatar, Divider} from '@chakra-ui/react';
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  const handleLogout = () => {
    logout()
    window.location.href = "/";
  }

  return (
    <Box p={8} bg="gray.200" h="100vh" display="flex" alignItems="center" justifyContent="center" marginTop="-50px">
      <Box
        maxW="600px"
        p={4}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
      >
        <Flex direction="column" alignItems="center" mb={4}>
          <Avatar size="xl" name={user.name} />
          <Text mt={2} fontSize="xl" fontWeight="bold">
            Welcome, {user.name}!
          </Text>
        </Flex>
        <Divider />
        <Box mt={4} padding="20px">
          <Text padding="10px">Status: {user.status}</Text>
          {user.status !== 'Public Client' && (
            <Text padding="10px">Group Size: {user.group_number}</Text>
          )}
          <Text padding="10px">Email Address: {user.email}</Text>
          <Text padding="10px">Phone Number: {user.phone_number}</Text>
          <Text>Location: {user.location}</Text>
        </Box>
        <Flex justifyContent="space-between" mt={4}>
          <NavLink to="/update_account">
            <Button marginRight="50px" colorScheme="teal">Update My Account</Button>
          </NavLink>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>
        <DeleteAccount />
      </Box>
    </Box>
  );
};

export default Profile;