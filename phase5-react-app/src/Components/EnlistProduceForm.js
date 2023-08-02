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

const EnlistProduceForm = () => {
  const [cropCategory, setCropCategory] = useState('');
  const [producePricePerKg, setProducePricePerKg] = useState('');
  const [quantityHarvested, setQuantityHarvested] = useState('');
  const [produceType, setProduceType] = useState('sellLocally');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate backend processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Show the appropriate alert based on the form submission result
    if (cropCategory && producePricePerKg && quantityHarvested && produceType) {
      setIsSuccessAlertOpen(true);
    } else {
      setIsFailureAlertOpen(true);
    }
  };

  const handleCloseSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleCloseFailureAlert = () => {
    setIsFailureAlertOpen(false);
  };

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={6}>
        Enlist Produce
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          <FormControl mb={6}>
            <FormLabel>Category of Crop:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={cropCategory}
              onChange={(e) => setCropCategory(e.target.value)}
              placeholder="e.g Tea, Coffee..."
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Produce Price per kg:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={producePricePerKg}
              onChange={(e) => setProducePricePerKg(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Quantity Harvested (kg):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={quantityHarvested}
              onChange={(e) => setQuantityHarvested(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Sell options:</FormLabel>
            <Select size="sm" value={produceType} onChange={(e) => setProduceType(e.target.value)}>
              <option value="sellLocally">Sell Locally</option>
              <option value="export">Export Produce</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="green" bgColor="#317873">
            Submit
          </Button>
        </Box>
      </motion.form>
      {/* Success Alert */}
      {isSuccessAlertOpen && (
        <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" mt={2} mx="auto" maxW="400px">
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Successfully submitted!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
        </Alert>
      )}
      {/* Failure Alert */}
      {isFailureAlertOpen && (
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" mt={2} mx="auto" maxW="400px">
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Failed to submit.
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseFailureAlert} />
        </Alert>
      )}
    </Box>
  );
};

export default EnlistProduceForm;
