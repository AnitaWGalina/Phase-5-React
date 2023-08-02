import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/transition';

const ParentLink = ({ to, label, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      as={Link}
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      px={4}
      py={2}
      position="relative"
      display="inline-block"
      group
    >
      <ChakraLink
        as={Link}
        to={to}
        _hover={{ textDecoration: 'none' }}
        _before={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: isHovered ? '100%' : '0%',
          height: '2px',
          bg: '#317873',
          transition: 'width 0.3s ease-in-out',
        }}
      >
        {label}
      </ChakraLink>
      <SlideFade in={isHovered} offsetY="-10px">
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
      </SlideFade>
    </Box>
  );
};

const ChildLink = ({ to, label }) => (
  <ChakraLink as={Link} to={to} display="block" p={2} _hover={{ bg: 'gray.100' }}>
    {label}
  </ChakraLink>
);

const PublicClientLandingPage = () => {
  return (
    <Center>
      <Stack direction="row" spacing={4}>
        <ParentLink to="/public-client-products" label="Products">
          <ChildLink to="/public-client-products" label="View Products" />
        </ParentLink>
        <ParentLink to="/public-client-services" label="Services">
          <ChildLink to="/lease-land" label="Lease Land" />
          <ChildLink to="/rent-land" label="Rent Land" />
        </ParentLink>
      </Stack>
    </Center>
  );
};

export default PublicClientLandingPage;
