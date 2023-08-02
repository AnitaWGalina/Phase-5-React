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
} from '@chakra-ui/react';

const FarmingGroupAdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Fetch products from the API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
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
    setShowPopup(true);
  };

  const handlePurchaseProduct = () => {
    // Handle the purchase logic here
    console.log('Product purchased:', selectedProduct.ProductName);
    setShowPopup(false);
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
          <Image src={product.ProductImage} alt={product.ProductName} boxSize="100%" objectFit="cover" h={200} />
          <Heading fontSize="md" mt={2} noOfLines={2}>
            {product.ProductName}
          </Heading>
          <Text fontSize="sm" mt={2}>
            Price: ${product.ProductPrice}
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
            <AlertDialogHeader>{selectedProduct.ProductName}</AlertDialogHeader>
            <AlertDialogBody>
              <Image src={selectedProduct.ProductImage} alt={selectedProduct.ProductName} boxSize="100%" objectFit="contain" mb={4} />
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Price: ${selectedProduct.ProductPrice}
              </Text>
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
