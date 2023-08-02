import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const EnlistProduceForm = () => {
  const [cropCategory, setCropCategory] = useState('');
  const [producePricePerKg, setProducePricePerKg] = useState('');
  const [quantityHarvested, setQuantityHarvested] = useState('');
  const [produceType, setProduceType] = useState('sellLocally');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'Form submitted!',
      cropCategory,
      producePricePerKg,
      quantityHarvested,
      produceType
    );
  };

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={6}>
        Enlist Produce
      </Heading>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box maxW="400px" mx="auto" p={4}>
          <FormControl mb={6}>
            <FormLabel>Category of Crop:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={cropCategory}
              onChange={(e) => setCropCategory(e.target.value)}
              placeholder="e.g Tea, Coffee..."
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Produce Price per kg:</FormLabel>
            <Input
              size="sm"
              type="text"
              value={producePricePerKg}
              onChange={(e) => setProducePricePerKg(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Quantity Harvested (kg):</FormLabel>
            <Input
              size="sm"
              type="text"
              value={quantityHarvested}
              onChange={(e) => setQuantityHarvested(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Sell options:</FormLabel>
            <Select size="sm" value={produceType} onChange={(e) => setProduceType(e.target.value)}>
              <option value="sellLocally">Sell Locally</option>
              <option value="export">Export Produce</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="green" bgColor="#317873">
            Submit
          </Button>
        </Box>
      </motion.form>
    </Box>
  );
};

export default EnlistProduceForm;
