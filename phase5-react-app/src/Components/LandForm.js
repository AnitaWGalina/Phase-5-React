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
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LandForm() {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt')
  const [userId, setUserId] = useState(user?.id || '');

  const navigate = useNavigate()

  const [landImage, setLandImage] = useState('');
  const [landDescription, setLandDescription] = useState('');
  const [sizeInAcres, setSizeInAcres] = useState('');
  const [plotCount, setPlotCount] = useState('');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const calculatePlotCount = (squareMeters) => {
    const plotsPerSquareMeters = 464.5152;
    return Math.floor(squareMeters / plotsPerSquareMeters);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_id: userId,
      image: landImage,
      description: landDescription,
      size_in_acres: sizeInAcres
    };

    try {
      const response = await fetch('/farming_lands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccessAlertOpen(true);
        navigate("/land_list")
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
  <Box p={8} bg="gray.200" bgImg="https://tinyurl.com/3jxb4hrd" bgRepeat="no-repeat" bgSize="cover" h="100vh">
    <Box maxW="600px" mx="auto" p={4} bg="rgba(255, 255, 255, 0.753)" borderRadius="md" boxShadow="md">
      <Heading as="h1" mb={6} fontSize="xl" fontWeight="semibold" textAlign="center">
        Upload Your Land
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          <FormControl mb={6}>
            <FormLabel>Land Image (Image URL):</FormLabel>
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
            <FormLabel>Size in Square Meters:</FormLabel>
            <Input
              size="sm"
              type="number"
              value={sizeInAcres}
              onChange={handleSizeInAcresChange}
              required
            />
          </FormControl>
          {plotCount && (
            <p style={{ textAlign: "center" }}>
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
            Successfully uploaded a {sizeInAcres} square meter piece of land belonging to {user.name}!
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
  </Box>
  );
}

export default LandForm;
