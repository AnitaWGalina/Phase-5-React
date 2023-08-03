import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const TrainingForm = () => {
  const [dateOfTraining, setDateOfTraining] = useState('');
  const [numberOfTrainees, setNumberOfTrainees] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [registrationFee, setRegistrationFee] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  useEffect(() => {
    // Fetch registration fee from the backend
    fetch('/api/registration-fee')
      .then((response) => response.json())
      .then((data) => setRegistrationFee(data.registrationFee))
      .catch((error) => {
        console.error('Error fetching registration fee:', error);
      });
  }, []);

  useEffect(() => {
    if (registrationFee !== null && numberOfTrainees !== '') {
      const calculatedTotalCost = (numberOfTrainees * registrationFee).toFixed(2);
      setTotalCost(calculatedTotalCost);
    } else {
      setTotalCost(null);
    }
  }, [registrationFee, numberOfTrainees]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      dateOfTraining,
      numberOfTrainees,
      totalCost,
    };

    try {
      const response = await fetch('http://localhost:3000/farmer_trainings', {
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

  const handleCloseSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleCloseFailureAlert = () => {
    setIsFailureAlertOpen(false);
  };

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={6}>
        Training Form
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          {showForm ? (
            <>
              <FormControl mb={4}>
                <FormLabel>Date of Training:</FormLabel>
                <Input
                  size="sm"
                  type="date"
                  value={dateOfTraining}
                  onChange={(e) => setDateOfTraining(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Number of Trainees:</FormLabel>
                <Input
                  size="sm"
                  type="number"
                  value={numberOfTrainees}
                  onChange={(e) => setNumberOfTrainees(e.target.value)}
                />
              </FormControl>
              {registrationFee !== null && typeof registrationFee !== 'undefined' && (
                <Text mb={2} fontSize="sm">
                  Registration Fee: {registrationFee.toFixed(2)}
                </Text>
              )}
              {totalCost !== null && (
                <Text mb={4} fontSize="sm">
                  Total Cost: {totalCost}
                </Text>
              )}
              <Button type="submit" colorScheme="green" bgColor="#317873">
                Submit
              </Button>
            </>
          ) : (
            <>
              <Text mb={4}>
                Unlock your full potential as a farmer with our expert training services. We are
                dedicated to empowering agricultural enthusiasts like you by equipping you with the
                knowledge and skills to thrive in modern farming. Our comprehensive programs cover
                everything from sustainable practices and innovative techniques to efficient resource
                management. Join us, and together, we'll cultivate success and take your farming
                endeavors to new heights. Embrace the future of farming with confidence – start your
                journey with us today.
              </Text>
              {registrationFee !== null && typeof registrationFee !== 'undefined' && (
                <Text mb={4} fontSize="sm">
                  Registration Fee: {registrationFee.toFixed(2)}
                </Text>
              )}
              <Button onClick={() => setShowForm(true)} colorScheme="green" bgColor="#317873">
                Enroll for Training
              </Button>
            </>
          )}
        </Box>
      </motion.form>
      {/* Success Alert */}
      {isSuccessAlertOpen && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          mt={2}
          mx="auto"
          maxW="400px"
        >
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Successfully enrolled for training!
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
        </Alert>
      )}
      {/* Failure Alert */}
      {isFailureAlertOpen && (
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          mt={2}
          mx="auto"
          maxW="400px"
        >
          <AlertIcon boxSize="24px" mr={0} />
          <AlertTitle mt={1} mb={1} fontSize="sm">
            Failed to enroll for training.
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseFailureAlert} />
        </Alert>
      )}
    </Box>
  );
};

export default TrainingForm;
