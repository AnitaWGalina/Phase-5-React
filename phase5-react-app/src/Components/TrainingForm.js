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
import { useAuth } from '../context/AuthContext';

const TrainingForm = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt')
  const [userId, setUserId] = useState(user?.id || ''); // Initialize with an empty string if user is null


  const registrationFee = 7000; // Fixed registration fee of 7000 KSh
  const [dateOfTraining, setDateOfTraining] = useState('');
  const [numberOfTrainees, setNumberOfTrainees] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [totalCost, setTotalCost] = useState(null);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  useEffect(() => {
    if (numberOfTrainees !== '') {
      const calculatedTotalCost = (numberOfTrainees * registrationFee).toFixed(2);
      setTotalCost(calculatedTotalCost);
    } else {
      setTotalCost(null);
    }
  }, [registrationFee, numberOfTrainees]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      userId,
      dateOfTraining,
      numberOfTrainees,
    };

    try {
      const response = await fetch('/farmer_trainings', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: formData.userId,
          number_of_trainees: formData.numberOfTrainees,
          training_date: dateOfTraining
        }) // Wrap the data in an object as expected by Rails
      })

      if (response.ok) {
        setIsSuccessAlertOpen(true);
        // console.log("Successfully signed up for training!");
        // window.alert("Successfully signed up for training!");
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

  return (
    <Box p={8} bg="gray.200" bgImg="https://tinyurl.com/52ymf3ra" bgRepeat="no-repeat" bgSize="cover" h="100vh">
    <Box maxW="600px" mx="auto" p={4} bg="rgba(255, 255, 255, 0.753)" borderRadius="md" boxShadow="md">
      <Heading as="h1" mb={6} textAlign="center">
        Apply For Training
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
                  onChange={(e) => setNumberOfTrainees(parseInt(e.target.value))}
                />
              </FormControl>
              <Text mb={2} fontSize="sm" fontWeight="bold">
                Registration Fee: {registrationFee} KSh
              </Text>
              {totalCost !== null && (
                <Text mb={2} fontSize="sm" fontWeight="bold">
                  Total Training Cost: {totalCost} KSh
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
              <Text mb={4} fontSize="sm" fontWeight="bold">
                Registration Fee: {registrationFee} KSh
              </Text>
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
            {user.name} has successfully enrolled {numberOfTrainees} members for training starting on {dateOfTraining}!
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
  </Box>
  );
};

export default TrainingForm;
