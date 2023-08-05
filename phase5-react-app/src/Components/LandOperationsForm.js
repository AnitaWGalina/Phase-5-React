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
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Select
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LeaseLandForm = ({land_id}) => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt')
  const [userId, setUserId] = useState(user?.id || '');
  // const [landLocation, setLandLocation] = useState('');
  // const [landSize, setLandSize] = useState('');
  const [operationDuration, setOperationDuration] = useState('');
  const [operationPrice, setOperationPrice] = useState('');
  const [operationType, setOperationType] = useState('');
  // const [landSizeInPlots, setLandSizeInPlots] = useState('');
  // const [landSizeInAcres, setLandSizeInAcres] = useState('');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const typeValue = operationType === 'rent' ? 0 : operationType === 'lease' ? 1 : '';

    // Prepare the data to be sent to the backend
    const formData = {
      userId: user.id,
      landId: land_id,
      operationDuration,
      operationPrice,
      operationType: typeValue
    };

    try {
      // Send the data to the backend
      const response = await fetch('/land_operations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: formData.userId,
          farming_land_id: formData.landId,
          type_of_operation: formData.operationType,
          operation_duration: formData.operationDuration,
          cost_of_operation: formData.operationPrice
        }),
      });

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

  const handleCloseSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleCloseFailureAlert = () => {
    setIsFailureAlertOpen(false);
  };

  // const handleLandSizeChange = (e) => {
  //   setLandSize(e.target.value);
  //   // Convert land size to plots and acres
  //   const sizeInSquareMeters = parseInt(e.target.value, 10);
  //   const sizeInPlots = (sizeInSquareMeters / (50 * 100)).toFixed(2);
  //   const sizeInAcres = (sizeInSquareMeters / 4046.856).toFixed(2);
  //   setLandSizeInPlots(sizeInPlots);
  //   setLandSizeInAcres(sizeInAcres);
  // };

  // useEffect(() => {
  //   // Calculate the expiration date when operationDuration changes
  //   if (operationDuration) {
  //     const currentDate = new Date();
  //     const durationInMonths = parseInt(operationDuration, 10);
  //     const expirationDate = new Date(currentDate.setMonth(currentDate.getMonth() + durationInMonths));
  //     setExpirationDate(expirationDate.toDateString());
  //   } else {
  //     setExpirationDate('');
  //   }
  // }, [operationDuration]);

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={6}>
        {/* Lease Land Form */}
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          {/* <FormControl mb={6}>
            <FormLabel>Land Location (Town & City):</FormLabel>
            <Flex alignItems="center">
              <Input
                size="sm"
                type="text"
                value={landLocation}
                onChange={(e) => setLandLocation(e.target.value)}
                placeholder="e.g. Nairobi, Limuru..."
              />
              {landLocation && (
                <Link
                  href={`https://www.google.com/maps/place/${encodeURIComponent(landLocation)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  ml={2}
                >
                  <img
                    src="https://ps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png"
                    alt="Google Pin"
                    style={{ width: '20px', height: '20px', marginBottom: '-4px' }}
                  />
                </Link>
              )}
            </Flex>
          </FormControl> */}
          {/* <FormControl mb={6}>
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
          </Box> */}
          <FormControl mb={6}>
            <FormLabel>Operation Duration (in months):</FormLabel>
            <Input
              size="sm"
              type="number"
              value={operationDuration}
              onChange={(e) => setOperationDuration(parseInt(e.target.value))}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Operation Price (per month):</FormLabel>
            <Flex align="center">
              <Input
                size="sm"
                type="number"
                value={operationPrice}
                onChange={(e) => setOperationPrice(parseInt(e.target.value))}
                paddingRight="32px"
              />
              <Text marginLeft="10px">:KSh</Text>
            </Flex>
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Operation Type:</FormLabel>
            <Select
              size="sm"
              value={operationType}
              onChange={(e) => setOperationType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="rent">Rent</option>
              <option value="lease">Lease</option>
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

export default LeaseLandForm;
