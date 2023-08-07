import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Center,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import LeaseLandForm from './LandOperationsForm';

const LandList = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt')
  const [userId, setUserId] = useState(user?.id || '');

  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Fetch lands from the API
    fetch('/farming_lands', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => setLands(data))
      .catch((error) => console.error('Error fetching lands:', error))
      .finally(() => setLoading(false));
  }, []);

  const handleLandClick = (land) => {
    setSelectedLand(land);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLand(null);
    setIsModalOpen(false);
  };

  const filterLandsByTag = (tag) => {
    setActiveTag(tag);
  };

  const filteredLands = lands.filter((land) => {
    if (activeTag === 'Owned') {
      return land.user_id === user.id;
    } else if (activeTag) {
      return land.status === activeTag;
    }
    return true;
  });

  if (!user) {
    return <h2>Please log in to view available pieces of land.</h2>;
  }

  const renderLands = () => {
    return filteredLands.map((land) => {
      const sizeInPlots = (land.size_in_acres/ (50 * 100)).toFixed(2);
      const sizeInAcres = (land.size_in_acres / 4046.856).toFixed(2);

      return (
        <GridItem
          key={land.id}
          className="data-item"
          boxShadow="md"
          borderRadius="md"
          p={4}
          cursor="pointer"
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'scale(1.02)' }}
          onClick={() => handleLandClick(land)}
        >
          <Box>
            <Image src={land.image} alt={`Land ${land.id}`} boxSize="100%" objectFit="cover" h={200} />
            <Heading fontSize="md" mt={2} noOfLines={2}>
              <Text fontWeight="bold">Owned by:</Text> {land.user_name}
            </Heading>
            <Text fontSize="sm" mt={2}>
              Size: {land.size_in_acres} square meters
            </Text>
            <Text fontSize="sm">Status: {land.status}</Text>
            <Text fontSize="xs" mt={2}>Land Size in Plots: {sizeInPlots}</Text>
            <Text fontSize="xs" mt={2}>Land Size in Acres: {sizeInAcres}</Text>
            <Box bg="#317873" p={2} mt={2} borderRadius="md">
              <Text fontSize="sm" color="white">
                Description: {land.description}
              </Text>
            </Box>
          </Box>
        </GridItem>
      );
    });
  };

  return (
    <Box
      className="product-container"
      p={10}
      bgGradient="linear(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.5))"
      bgSize="cover"
      bgImage="url('../img/farm.jpg')"
    >
      <Heading as="h3" fontSize="4xl" fontFamily="Lobster" whiteSpace="nowrap" mb={4}>
        Land For Renting Or Leasing
      </Heading>

      <Box mb={4}>
        <Button
          variant={activeTag === 'Owned' ? 'solid' : 'outline'}
          colorScheme="teal"
          mr={2}
          onClick={() => filterLandsByTag('Owned')}
          borderRadius="30px"
        >
          Owned
        </Button>
        <Button
          variant={activeTag === 'Rented' ? 'solid' : 'outline'}
          colorScheme="teal"
          mr={2}
          onClick={() => filterLandsByTag('Rented')}
          borderRadius="30px"
        >
          Rented
        </Button>
        <Button
          variant={activeTag === 'Leased' ? 'solid' : 'outline'}
          colorScheme="teal"
          mr={2}
          onClick={() => filterLandsByTag('Leased')}
          borderRadius="30px"
        >
          Leased
        </Button>
        <Button
          variant={activeTag === 'Unoccupied' ? 'solid' : 'outline'}
          colorScheme="teal"
          onClick={() => filterLandsByTag('Unoccupied')}
          borderRadius="30px"
        >
          Unoccupied
        </Button>
      </Box>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} justifyItems="center">
        {renderLands()}
      </Grid>
      {loading && (
        <Center mt={4}>
          <Spinner color="teal" size="lg" />
        </Center>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedLand?.user_name}'s Land</ModalHeader>
          <ModalBody>
            <Image src={selectedLand?.image} alt={`Land ${selectedLand?.id}`} boxSize="100%" objectFit="cover" />
            <Text mt={4}>{selectedLand?.description}</Text>
          </ModalBody>
          <ModalFooter>
            {selectedLand && selectedLand.status === "Unoccupied" ? (
              <LeaseLandForm land_id={selectedLand.id}/>
            ) : (
              <Text mt={4}>This land is not available to rent or lease</Text>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LandList;
