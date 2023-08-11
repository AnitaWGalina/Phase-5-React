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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeaseLandForm = ({land_id}) => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt')
  const [userId, setUserId] = useState(user?.id || '');
  
  const navigate = useNavigate()

  const [operationDuration, setOperationDuration] = useState('');
  const [operationPrice, setOperationPrice] = useState('');
  const [operationType, setOperationType] = useState('');
  
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const typeValue = operationType === 'rent' ? 0 : operationType === 'lease' ? 1 : '';

    const total = operationDuration * operationPrice
    toast.info('Proceeding to payment...', {
      autoClose: 1000, // Set the duration in milliseconds
      position: toast.POSITION.TOP_CENTER,
      onClose: () => {
        navigate(`/payment/${total}`);
      },
    })

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
      const response = await fetch('https://agribix.onrender.com/land_operations', {
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
        // navigate("/land_list")
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

  return (
    <Box p={5} textAlign="center">
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
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
