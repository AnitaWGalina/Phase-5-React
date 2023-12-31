import React, { useEffect, useState } from 'react';
import {
  Flex,
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
import { useAuth } from '../context/AuthContext';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PublicClientProducts = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt')
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    // Fetch products from the API
    fetch('https://agribix.onrender.com/public_client_products', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log("Fetched products:", data);
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
            Price: Ksh {product.price}
          </Text>
        </Box>
      </GridItem>
    ));
  };

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

  const handlePurchase = () => {
    if (!selectedProduct) {
      return; // No product selected, do nothing
    }

    const total = selectedProduct.price * quantity
    toast.info('Proceeding to payment...', {
      autoClose: 1000, // Set the duration in milliseconds
      position: toast.POSITION.TOP_CENTER,
      onClose: () => {
        navigate(`/payment/${total}`);
      },
    })
    

    const saleData = {
      user_id: user.id,
      public_client_product_id: selectedProduct.id,
      quantity: quantity
    };

    setLoading(true);

    fetch('https://agribix.onrender.com/public_client_product_sales', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ public_client_product_sale: saleData }) // Wrap the data in an object as expected by Rails
    })
      .then(response => response.json())
      .then(data => {
        // console.log(`Successfully bought ${quantity} ${selectedProduct.name}s for ${user.name}!`)
        setShowPopup(false);
        // Here you might want to handle any success message or update UI accordingly
      })
      .catch(error => {
        console.error("Error creating product sale:", error);
        // Handle error scenario here
      })
      .finally(() => {
        setLoading(false);
        setShowPopup(false); // Close the popup after making the request
      });
  };


  return (
    <Box className="product-container" p={10} bgGradient="linear(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.5))" bgSize="cover" bgImage="url('../img/farm.jpg')">
      <Heading as="h3" fontSize="4xl" fontFamily="Lobster" whiteSpace="nowrap" mb={4}>
        Products For Clients
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
              <InputGroup size="sm" mb={2} alignItems="center">
              <Button onClick={handleDecrementQuantity} size="sm" width="50px" leftIcon={<MinusIcon />} />
                <Input
                  value={quantity}
                  readOnly
                  width="50px"
                  w="6rem"
                  textAlign="center"
                  borderRight="none"
                  borderLeft="none"
                   borderRadius="none"
                   marginTop="15px"
                  _focus={{ border: "none", boxShadow: "none" }}
                />
                <ButtonGroup size="sm">
                  <Button onClick={handleIncrementQuantity} size="sm" rightIcon={<AddIcon />} />
                </ButtonGroup>
              </InputGroup>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Flex justifyContent="space-between">
                <Button colorScheme="teal" onClick={handlePurchase} width="200px">
                  Purchase Product
                </Button>
                <Button onClick={() => setShowPopup(false)} width="150px">Close</Button>
              </Flex>
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

export default PublicClientProducts;
