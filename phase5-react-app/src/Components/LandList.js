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

const LandList = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Fetch lands from the API
    fetch('http://localhost:3000/farming_lands')
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

  const renderLands = () => {
    return lands.map((land) => (
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
            Size: {land.size_in_acres} acres
          </Text>
          <Text fontSize="sm">Status: {land.status}</Text>
          <Box bg="#317873" p={2} mt={2} borderRadius="md">
            <Text fontSize="sm" color="white">
              Description: {land.description}
            </Text>
          </Box>
        </Box>
      </GridItem>
    ));
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
        Available Lands for Rent
      </Heading>
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
            <Button colorScheme="teal" onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="blue">Rent Land</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LandList;
