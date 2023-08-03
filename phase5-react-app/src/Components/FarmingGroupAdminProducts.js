import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Center,
  Spinner,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  InputGroup,
  Input,
  ButtonGroup,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const FarmingGroupAdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    // Fetch products from the API
    fetch('http://localhost:3000/farmer_products')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched products:", data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDescription(product.description);
    setShowPopup(true);
  };

  const handlePurchaseProduct = () => {
    // Handle the purchase logic here
    console.log(`Purchased ${quantity} ${selectedProduct.name}(s)`);
    setShowPopup(false);
  };

  const handleIncrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const renderProducts = () => {
    return products.map(product => (
      <GridItem
        key={product.id}
        className="data-item"
        boxShadow="md"
        borderRadius="md"
        p={4}
        cursor="pointer"
        onClick={() => handleProductClick(product)}
      >
        <Box>
          <Image src={product.image} alt={product.name} boxSize="100%" objectFit="cover" h={200} />
          <Heading fontSize="md" mt={2} noOfLines={2}>
            {product.name}
          </Heading>
          <Text fontSize="sm" mt={2}>
            Price: ${product.price}
          </Text>
        </Box>
      </GridItem>
    ));
  };

  return (
    <Box className="product-container" p={10} bgGradient="linear(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.5))" bgSize="cover" bgImage="url('../img/farm.jpg')">
      <Heading as="h3" fontSize="4xl" fontFamily="Lobster" whiteSpace="nowrap" mb={4}>
        Farm Utilities and Equipment
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} justifyItems="center">
        {renderProducts()}
      </Grid>
      {showPopup && selectedProduct && (
        <AlertDialog isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>{selectedProduct.name}</AlertDialogHeader>
            <AlertDialogBody>
              <Image src={selectedProduct.image} alt={selectedProduct.name} boxSize="100%" objectFit="contain" mb={4} />
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Price: ${selectedProduct.price}
              </Text>
              <Text fontSize="md" mb={2}>
                {description}
              </Text>
              <InputGroup size="md" mb={2}>
                <Button onClick={handleDecrementQuantity} size="sm" leftIcon={<MinusIcon />} />
                <Input
                  value={quantity}
                  readOnly
                  w="3rem"
                  textAlign="center"
                  borderRight="none"
                  borderLeft="none"
                />
                <ButtonGroup size="sm">
                  <Button onClick={handleIncrementQuantity} size="sm" leftIcon={<AddIcon />} />
                </ButtonGroup>
              </InputGroup>
              <Button colorScheme="teal" onClick={handlePurchaseProduct}>
                Purchase Product
              </Button>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => setShowPopup(false)}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {loading && (
        <Center mt={4}>
          <Spinner color="teal" size="lg" />
        </Center>
      )}
    </Box>
  );
};

export default FarmingGroupAdminProducts;
