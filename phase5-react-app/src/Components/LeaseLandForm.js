import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const LeaseLandForm = () => {
  const [landLocation, setLandLocation] = useState('');
  const [landSize, setLandSize] = useState('');
  const [operationDuration, setOperationDuration] = useState('');
  const [operationPrice, setOperationPrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [landSizeInPlots, setLandSizeInPlots] = useState('');
  const [landSizeInAcres, setLandSizeInAcres] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Lease land form submitted!', landLocation, landSize, operationDuration, operationPrice);
  };

  const handleLandSizeChange = (e) => {
    setLandSize(e.target.value);
    // Convert land size to plots and acres
    const sizeInSquareMeters = parseInt(e.target.value, 10);
    const sizeInPlots = (sizeInSquareMeters / (50 * 100)).toFixed(2);
    const sizeInAcres = (sizeInSquareMeters / 4046.856).toFixed(2);
    setLandSizeInPlots(sizeInPlots);
    setLandSizeInAcres(sizeInAcres);
  };

  useEffect(() => {
    // Calculate the expiration date when operationDuration changes
    if (operationDuration) {
      const currentDate = new Date();
      const durationInMonths = parseInt(operationDuration, 10);
      const expirationDate = new Date(currentDate.setMonth(currentDate.getMonth() + durationInMonths));
      setExpirationDate(expirationDate.toDateString());
    } else {
      setExpirationDate('');
    }
  }, [operationDuration]);

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={6}>
        Lease Land Form
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          <FormControl mb={6}>
            <FormLabel>Land Location (Town & City):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={landLocation}
              onChange={(e) => setLandLocation(e.target.value)}
              placeholder="e.g. Nairobi, Limuru..."
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Land Size (in square meters):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={landSize}
              onChange={handleLandSizeChange}
            />
          </FormControl>
          <Box mb={6}>
            {landSizeInPlots && <Text>Land Size in Plots: {landSizeInPlots}</Text>}
            {landSizeInAcres && <Text>Land Size in Acres: {landSizeInAcres}</Text>}
          </Box>
          <FormControl mb={6}>
            <FormLabel>Operation Duration (in months):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={operationDuration}
              onChange={(e) => setOperationDuration(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Operation Price (per year):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={operationPrice}
              onChange={(e) => setOperationPrice(e.target.value)}
              placeholder="KSh"
            />
          </FormControl>
          {expirationDate && <Text>Lease Expiration Date: {expirationDate}</Text>}
          <Button type="submit" colorScheme="green" bgColor="#317873">
            Submit
          </Button>
        </Box>
      </motion.form>
      {/* Google Maps Link */}
      {landLocation && (
        <Link
          href={`https://www.google.com/maps/place/${encodeURIComponent(landLocation)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png"
            alt="Google Pin"
          />
        </Link>
      )}
    </Box>
  );
};

export default LeaseLandForm;
