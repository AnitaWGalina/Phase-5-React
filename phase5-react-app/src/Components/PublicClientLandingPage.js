import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, Stack } from '@chakra-ui/react';

const ParentLink = ({ to, label, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      as={Link}
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      textDecoration={isHovered ? 'underline' : 'none'}
      px={4}
      py={2}
      position="relative"
      display="inline-block"
      group
    >
      {label}
      {isHovered && children} {/* Child links will be displayed on hover */}
    </Box>
  );
};

const ChildLink = ({ to, label }) => (
  <Box
    as={Link}
    to={to}
    display="block"
    p={2}
    bg="white"
    pl={8} // Add left padding to distinguish child links visually
    boxShadow="lg"
    _hover={{ bg: 'gray.100' }}
  >
    {label}
  </Box>
);

const PublicClientLandingPage = () => {
  return (
    <Center>
      <Stack direction="row" spacing={4}>
        <ParentLink to="/products" label="Products">
          <ChildLink to="/public-client-products" label="View Products" />
        </ParentLink>
        <ParentLink to="/services" label="Services">
          <ChildLink to="/lease-land" label="Lease Land" />
          <ChildLink to="/rent-land" label="Rent Land" />
        </ParentLink>
      </Stack>
    </Center>
  );
};

export default PublicClientLandingPage;
