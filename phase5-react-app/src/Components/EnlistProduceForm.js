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
  const token = localStorage.getItem('jwt')
  const [userId, setUserId] = useState(user?.id || '');

  const [cropCategory, setCropCategory] = useState('');
  const [producePricePerKg, setProducePricePerKg] = useState(0);
  const [quantityHarvested, setQuantityHarvested] = useState(0);
  const [produceType, setProduceType] = useState('sellLocally');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the backend
    const formData = {
      userId,
      cropCategory,
      producePricePerKg,
      quantityHarvested
    };

    try {
      // Send the data to the backend
      const response = await fetch('https://agribix.onrender.com/farmer_produce_sales', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: formData.userId,
          produce_name: formData.cropCategory,
          produce_unit_price: formData.producePricePerKg,
          produce_quantity: formData.quantityHarvested
        }) // Wrap the data in an object as expected by Rails
      })

      // Check if the request was successful
      if (response.ok) {
        setIsSuccessAlertOpen(true);
      } else {
        setIsFailureAlertOpen(true);
      }
    } catch (error) {
      setIsFailureAlertOpen(true);
    }
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

  const handleCloseSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleCloseFailureAlert = () => {
    setIsFailureAlertOpen(false);
  };

  return (
    <Box p={8} bg="gray.200" bgImg="https://tinyurl.com/yc4akr65" bgRepeat="no-repeat" bgSize="cover">
      <Box maxW="600px" mx="auto" p={4} bg="rgba(255, 255, 255, 0.753)" borderRadius="md" boxShadow="md">
        <Heading as="h1" mb={6} textAlign="center">
          Sell Produce
        </Heading>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormControl mb={6}>
            <FormLabel textAlign="center">Name of Crop:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={cropCategory}
              onChange={(e) => setCropCategory(e.target.value)}
              placeholder="e.g Tea, Coffee..."
              textAlign="center"
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel textAlign="center">Produce Price per kg:</FormLabel>
            <Input
              size="sm"
              type="number"
              value={producePricePerKg}
              onChange={(e) => setProducePricePerKg(parseInt(e.target.value))}
              textAlign="center"
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel textAlign="center">Quantity Harvested (kg):</FormLabel>
            <Input
              size="sm"
              type="number"
              value={quantityHarvested}
              onChange={(e) => setQuantityHarvested(parseInt(e.target.value))}
              textAlign="center"
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel textAlign="center">Sell options:</FormLabel>
            <Select textAlign="center" size="sm" value={produceType} onChange={(e) => setProduceType(e.target.value)}>
              <option value="sellLocally">Sell Locally</option>
              <option value="export">Export Produce</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="green" bgColor="#317873">
            Submit
          </Button>
        </motion.form>
      {/* Success Alert */}
      {isSuccessAlertOpen && (
        <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" mt={2} mx="auto" maxW="400px">
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Form submitted successfully!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
        </Alert>
      )}
      {/* Failure Alert */}
      {isFailureAlertOpen && (
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" mt={2} mx="auto" maxW="400px">
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Product sold unsuccessfully!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseFailureAlert} />
        </Alert>
      )}
    </Box>
  </Box>
  );
};

export default EnlistProduceForm;
