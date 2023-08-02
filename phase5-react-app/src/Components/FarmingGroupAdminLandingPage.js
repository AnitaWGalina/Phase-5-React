import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Link as ChakraLink, Stack, Center } from '@chakra-ui/react';

const ParentLink = ({ label, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{ textDecoration: 'underline' }}
      px={4}
      py={2}
      position="relative"
      display="inline-block"
      group
    >
      {label}
      {isHovered && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          zIndex={1}
          bg="white"
          boxShadow="lg"
          minW="200px"
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

const ChildLink = ({ to, label }) => (
  <ChakraLink as={Link} to={to} display="block" p={2} _hover={{ bg: 'gray.100' }}>
    {label}
  </ChakraLink>
);

const FarmingGroupAdminLandingPage = () => {
  return (
    <Center>
      <Flex direction="column" align="center">
        <Stack direction="row" spacing={4}>
          <ParentLink label="Products">
            <ChildLink to="/products" label="View Products" />
          </ParentLink>
          <ParentLink label="Services">
            <ChildLink to="/enlist-produce" label="Enlist Produce" />
            <ChildLink to="/lease-land" label="Lease Land" />
            <ChildLink to="/rent-land" label="Rent Land" />
            <ChildLink to="/training" label="Training" />
          </ParentLink>
        </Stack>
      </Flex>
    </Center>
  );
};

export default FarmingGroupAdminLandingPage;
