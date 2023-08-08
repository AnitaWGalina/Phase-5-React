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
  const { user } = useAuth();
  const token = localStorage.getItem('jwt');

  const [userId, setUserId] = useState(user?.id || '');
  const [cropCategory, setCropCategory] = useState('');
  const [producePricePerKg, setProducePricePerKg] = useState(0);
  const [quantityHarvested, setQuantityHarvested] = useState(0);
  const [produceType, setProduceType] = useState('sellLocally');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... (same as before)
  };

  const handleCloseSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleCloseFailureAlert = () => {
    setIsFailureAlertOpen(false);
  };

  // ... (other functions)

  return (
<Box p={8} textAlign="center" style={{ position: 'relative' }}>
      {/* Background Image */}
      <img
        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/431c8315940ed37a3d6d257ff74e067ce41e6879.webp"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70%', // Adjust the height to cover the top part of the page
          zIndex: -1,
        
        }}
      /> <Heading as="h1" mb={6} fontSize="3xl" color="teal.500">
         <Box as="span" color="purple.500">
             Sell Produce
         </Box>
     
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Form Fields */}
        {/* ... (same as before) */}
      </motion.form>
      {/* Success Alert */}
      {isSuccessAlertOpen && (
        <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" mt={4} mx="auto" maxW="400px">
          <AlertIcon boxSize="6" mr={0} color="green.500" />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            {cropCategory} sold successfully!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
        </Alert>
      )}
      {/* Failure Alert */}
      {isFailureAlertOpen && (
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" mt={4} mx="auto" maxW="400px">
          <AlertIcon boxSize="6" mr={0} color="red.500" />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Product sold unsuccessfully!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseFailureAlert} />
        </Alert>
      )}
      {/* Products Section */}
      <Box my={10}>
        <Heading as="h2" fontSize="xl" mb={4} color="teal.500">
          {/* Change color of "Available Products" heading */}
          <Box as="span" color="white.500">
            Available Products
          </Box>
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
