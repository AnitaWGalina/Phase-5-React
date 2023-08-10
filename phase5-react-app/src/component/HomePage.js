import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text, Container, Image, Grid } from '@chakra-ui/react';
import Image1 from '../Img/seeds.jpg';
import Image2 from '../Img/coffee.jpg';
import Image3 from '../Img/training.jpeg';
import Image4 from '../Img/land2.jpg';
// import { FiArrowRight } from "react-icons/fi";
// import Work from "./Work";
import Testimonial from "./Testimonial";
import "./HomePage.css";


const Home = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <div>
      <Box
          className="home-container"
          background={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.0)), url('https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/431c8315940ed37a3d6d257ff74e067ce41e6879.webp') center / cover no-repeat`}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="75vh"
          width="98.7vw"
          boxShadow="0px 5px 15px rgba(0, 0, 0, 1.8)"
          borderRadius="0 0 15px 15px"
      >
        <Heading
          as="h1"
          fontSize={['1.8rem', '7xl']}
          color="#FFF500"
          mb={['0.5rem', '1']}
          textAlign="center"
          fontFamily="'Inika', serif"
          className="font-inika-yellow"
        >
          Where Nature Meets Innovation,
        </Heading>
        <Heading
          as="h1"
          fontSize={['1.8rem', '7xl']}
          color="white"
          mb={['10px', '8']}
          textAlign="center"
          fontFamily="'Inika', serif"
          className="font-inika-white"
        >
          Cultivating a Flourishing Tomorrow
        </Heading>
      </Box>
      <Container maxW="container.lg" py="10">
        <Text fontSize="5xl" fontWeight="bold" color="gray.700" textAlign="center" mb="6">
          Elevate Your Agriculture Game with AgriBix
        </Text>
        <Text fontSize="2xl" color="gray.600" textAlign="center" mb="8">
          Sign up to get our products and services
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap="4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section"
          >
            <Box textAlign="center" mb="6">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                style={{ display: 'inline-block' }}
              >
                <Image
                  src={Image1}
                  alt="Image 1"
                  maxH="250px"
                  maxW="250px"
                  mx="auto"
                  borderRadius="md"
                />
              </motion.div>
              <Heading as="h2" fontSize="2xl" mt="4" color="black">
                <span style={{ color: '#FFF500', marginRight: '0.5rem', fontSize: '1.5em'}}>•</span>Farm Equipment
              </Heading>
              <motion.div variants={containerVariants}>
                <Text color="black" mt="2">
                  We offer top-quality seedlings and farm equipment to empower farmers for successful cultivation.
                </Text>
              </motion.div>
            </Box>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section"
          >
            <Box textAlign="center" mb="6" mt="50px">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                style={{ display: 'inline-block' }}
              >
                <Image
                  src={Image2}
                  alt="Image 2"
                  maxH="250px"
                  maxW="250px"
                  mx="auto"
                  borderRadius="md"
                />
              </motion.div>
                <Heading as="h2" fontSize="2xl" mt="4" color="black" style={{ whiteSpace: 'nowrap' }}>
                  <span style={{ color: '#FFF500', marginRight: '0.4rem', fontSize: '1.5em' }}>•</span> Produce Aggregation
                </Heading>

              <motion.div variants={containerVariants}>
              <Text color="black" mt="2" style={{ marginLeft: '2rem' }}>
                  Farmers can bring their harvested produce to us. We process and sell the final product to the public.
                </Text>
              </motion.div>
            </Box>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section"
          >
            <Box textAlign="center" mb="6">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                style={{ display: 'inline-block' }}
              >
                <Image
                  src={Image3}
                  alt="Image 3"
                  maxW="250px"
                  maxH="250px"
                  mx="auto"
                  borderRadius="md"
                />
              </motion.div>
              <Heading as="h2" fontSize="2xl" mt="4" color="black">
                <span style={{ color: '#FFF500', marginRight: '0.5rem', fontSize: '1.5em' }}>•</span>Training Services
              </Heading>
              <motion.div variants={containerVariants}>
                <Text color="black" mt="2">
                  We provide farmers with world-class training services to enhance their skills and knowledge.
                </Text>
              </motion.div>
            </Box>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section"
          >
            <Box textAlign="center" mb="6"  mt="50px">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                style={{ display: 'inline-block' }}
              >
                <Image
                  src={Image4}
                  alt="Image 4"
                  maxW="240px"
                  maxH="200px"
                  mx="auto"
                  borderRadius="md"
                />
              </motion.div>
              <Heading as="h2" fontSize="2xl" mt="4" color="black">
                <span style={{ color: '#FFF500', marginRight: '0.5rem', fontSize: '1.5em' }}>•</span> Leasing & Renting
              </Heading>
              <motion.div variants={containerVariants}>
                <Text color="black" mt="2">
                  Farmers and the General public can lease their land or rent land from others to expand their operations.
                </Text>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
      </Container>

      <Testimonial />
    </div>
  );
};

export default Home;
