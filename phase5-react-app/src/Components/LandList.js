import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Flex,
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

  const calculatePlotCount = (acres) => {
    const plotInOneAcre = 1 / 464.5152;
    return (acres * plotInOneAcre).toFixed(2);
  };

  const calculateSizeInAcres = (squareMeters) => {
    const acres = squareMeters / 4046.86;
    return acres.toFixed(2);
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
    return <Box
              border="1px solid red"
              backgroundColor="rgba(255, 0, 0, 0.1)"
              padding="1rem"
              borderRadius="4px"
            >
            Please log in to view this page.
            </Box>
  }

  const renderLands = () => {
    return filteredLands.map((land) => {
      const sizeInAcres = calculateSizeInAcres(land.size_in_acres);
      const plotCount = calculatePlotCount(land.size_in_acres);

      return (
        <GridItem
          key={land.id}
          // className="data-item"
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
            <Text fontSize="sm">Status: {land.status} by {land.owned_by} </Text>
            <Text fontSize="xs" mt={2}>Land Size in Plots: {plotCount}</Text>
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
      // className="product-container"
      p={10}
      bgGradient="linear(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.5))"
      bgSize="cover"
      // bgImage="url('../img/farm.jpg')"
    >
      <Heading as="h3" fontSize="4xl" fontFamily="Lobster" whiteSpace="nowrap" mb={4}>
        Land For Renting Or Leasing
      </Heading>

      <Flex mb={4} justifyContent="space-between">
        <Button
          variant={activeTag === 'Owned' ? 'solid' : 'outline'}
          colorScheme="teal"
          onClick={() => filterLandsByTag('Owned')}
          borderRadius="30px"
          flex="1"
          mr={2}
        >
          Owned
        </Button>
        <Button
          variant={activeTag === 'Rented' ? 'solid' : 'outline'}
          colorScheme="teal"
          onClick={() => filterLandsByTag('Rented')}
          borderRadius="30px"
          flex="1"
          mr={2}
        >
          Rented
        </Button>
        <Button
          variant={activeTag === 'Leased' ? 'solid' : 'outline'}
          colorScheme="teal"
          onClick={() => filterLandsByTag('Leased')}
          borderRadius="30px"
          flex="1"
          mr={2}
        >
          Leased
        </Button>
        <Button
          variant={activeTag === 'Unoccupied' ? 'solid' : 'outline'}
          colorScheme="teal"
          onClick={() => filterLandsByTag('Unoccupied')}
          borderRadius="30px"
          flex="1"
        >
          Unoccupied
        </Button>
      </Flex>


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
            <Text mt={4} fontWeight={"bold"}>{selectedLand?.description}</Text>
            <Text mt={2}>Size: {selectedLand?.size_in_acres} square meters</Text>
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
