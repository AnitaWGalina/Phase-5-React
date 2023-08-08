import React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      className="home-container"
      backgroundImage="url('https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/431c8315940ed37a3d6d257ff74e067ce41e6879.webp')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Occupy the entire viewport height
      width="100vw"  // Occupy the entire viewport width
    >
      <Heading
        as="h1"
        fontSize={['1.8rem', '7xl']}
        fontWeight="bold"
        color="#FFF500"
        mb={['0.01rem', '1']}
        textAlign="center"
        fontFamily="'Inika', serif"
        className="font-inika-yellow"
      >
        Where Nature Meets Innovation,
      </Heading>
      <Heading
        as="h1"
        fontSize={['1.8rem', '7xl']}
        fontWeight="bold"
        color="white"
        mb={['10px', '8']}
        textAlign="center"
        fontFamily="'Inika', serif"
        className="font-inika-white"
      >
        Cultivating a Flourishing Tomorrow
      </Heading>
    </Box>
  );
};

export default Home;