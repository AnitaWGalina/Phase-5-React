import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const EnlistProduceForm = () => {
  // ... (existing code for state and functions)

  return (
    <Box p={8} textAlign="center">
      {/* Image */}
      <Box
        mb={4}
        borderRadius="8px"
        overflow="hidden"
        boxShadow="lg"
        width="1440px"
        height="429px"
        flexShrink={0}
        backgroundImage="url('https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/431c8315940ed37a3d6d257ff74e067ce41e6879.webp')"
        backgroundSize="cover"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="#FFF"
        fontFamily="Inika Serif, sans-serif"
      >
        {/* Text on top of the image */}
        <Heading as="h1" fontSize="3xl" color="teal.500" zIndex="1">
          Farm Utilities and Equipment
        </Heading>
        {/* Sell Produce heading */}
        <Heading as="h1" mb={6} fontSize="3xl" color="teal.500">
          Sell Produce
        </Heading>
      </Box>

      {/* Form Fields */}
      {/* ... (same as before) */}

      {/* Success Alert */}
      {/* ... (same as before) */}

      {/* Failure Alert */}
      {/* ... (same as before) */}

      {/* Products Section */}
      <Box my={10}>
        <Heading as="h2" fontSize="xl" mb={4} color="teal.500">
          Available Products
        </Heading>
        {/* Here you can add a swipeable carousel to display products */}
        {/* For example, you can use react-slick or swiper.js */}
        {/* Make sure each product is wrapped in a card or an element with a click handler */}
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          {/* Product Card */}
          <Box
            mb={4}
            p={4}
            bg="white"
            boxShadow="lg"
            borderRadius="lg"
            maxWidth="300px"
            width="100%"
            textAlign="left"
            cursor="pointer"
            transition="transform 0.2s ease-in-out"
            whileHover={{ transform: 'scale(1.05)' }}
          >
            <Heading as="h3" fontSize="lg" color="teal.500">
              Product 1
            </Heading>
            {/* Add product details here */}
          </Box>
          {/* You can add more product cards here */}
        </Box>
        {/* See More Button */}
        <Button
          colorScheme="teal"
          variant="solid"
          size="sm"
          onClick={() => {
            // Show more products or navigate to a different page with all products
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};

export default EnlistProduceForm;

