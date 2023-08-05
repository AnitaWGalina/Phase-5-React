import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

function LandForm() {
  const [userName, setUserName] = useState('');
  const [landImage, setLandImage] = useState('');
  const [landDescription, setLandDescription] = useState('');
  const [sizeInAcres, setSizeInAcres] = useState('');
  const [plotCount, setPlotCount] = useState('');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const calculatePlotCount = (acres) => {
    const plotsInOneAcre = 8;
    return acres * plotsInOneAcre;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: userName,
      image: landImage,
      description: landDescription,
      size_in_acres: sizeInAcres,
    };

    try {
      const response = await fetch('/farming_lands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccessAlertOpen(true);
      } else {
        setIsFailureAlertOpen(true);
      }
    } catch (error) {
      setIsFailureAlertOpen(true);
    }
  };

  const handleSizeInAcresChange = (e) => {
    const acres = parseFloat(e.target.value);
    setSizeInAcres(acres);
    if (!isNaN(acres)) {
      const calculatedPlotCount = calculatePlotCount(acres);
      setPlotCount(calculatedPlotCount);
    } else {
      setPlotCount('');
    }
  };

  const handleCloseSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleCloseFailureAlert = () => {
    setIsFailureAlertOpen(false);
  };

  return (
    <Box p={8} textAlign="center" fontFamily="sans-serif">
      <Heading as="h1" mb={6} fontSize="xl" fontWeight="semibold">
        Lease Your Land
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          <FormControl mb={6}>
            <FormLabel>Owned by:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Land Image (Image URL or Google Pin):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={landImage}
              onChange={(e) => setLandImage(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Land Description:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={landDescription}
              onChange={(e) => setLandDescription(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Size in Acres:</FormLabel>
            <Input
              size="sm"
              type="number"
              value={sizeInAcres}
              onChange={handleSizeInAcresChange}
              required
            />
          </FormControl>
          {plotCount && (
            <p>
              <strong>Plot size:</strong> 50 * 100 feet<br />
              <strong>{plotCount} plots</strong>
            </p>
          )}
          <Button type="submit" colorScheme="green" bgColor="#317873" mt={4}>
            Add Farming Land
          </Button>
        </Box>
      </motion.form>
      {/* Success Alert */}
      {isSuccessAlertOpen && (
        <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" mt={2} mx="auto" maxW="400px">
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Farming land added successfully!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
        </Alert>
      )}
      {/* Failure Alert */}
      {isFailureAlertOpen && (
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" mt={2} mx="auto" maxW="400px">
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Error adding farming land!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseFailureAlert} />
        </Alert>
      )}
    </Box>
  );
}

export default LandForm;
