import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { Input, Text, FormControl, FormLabel, Button } from '@chakra-ui/react';

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [CheckoutRequestID, setCheckoutRequestID] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate();
  };

  const handleMpesaStkPush = () => {
    fetch('https://chamake.onrender.com/stkpush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        amount: '1',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('stkpush', data);
        setCheckoutRequestID(data[1].CheckoutRequestID);
        handleMpesaQuery()
      });
  };

  const handleMpesaQuery = () => {
    setLoading(true);

    fetch('https://chamake.onrender.com/stkquery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CheckoutRequestID: CheckoutRequestID,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('stkquery', data);
        if (data[1].ResultDesc === 'The service request is processed successfully.') {
          sendPaymentDetailsToBackend(phoneNumber);
          toast.success('Payment Successful');
        } else {
          toast.error('Payment Failed');
        }
        setPhoneNumber('');
      })
      .finally(() => setLoading(false));
  };

  const sendPaymentDetailsToBackend = (phoneNumber) => {
    const requestBody = {
      phoneNumber: phoneNumber,
      user_id: 1,
      amount: "1",
      chama_id: 1,
      checkout_request_id: CheckoutRequestID,
    };

    fetch('https://chamake.onrender.com/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <CardContainer>
        <BackIconWrapper onClick={handleGoBack} to="/chamaDetails">
          Back
        </BackIconWrapper>

        <div style={{ marginTop: "40px" }} className=" container">
          <Text>Amount:</Text>
          <FormControl marginBottom="10px">
            <FormLabel>Phone Number:</FormLabel>
            <Input
              type="text"
              name="phone_number"
              id="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="green" bgColor="#317873"></Button>
        </div>
      </CardContainer>
      {loading && (
        <LoaderOverlay>
          <Loader />
        </LoaderOverlay>
      )}
    </>
  );
};
const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  align: center;
  margin: auto;
  margin-top: 50px;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`;

const BackIconWrapper = styled(Link)`
  position: absolute;
  top: 20px;
  left: 40px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #15b76c;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const GreenButton = styled.button`
  margin-right: 15px;
  background-color: #15b76c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #128a57;
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;


export default PaymentForm;
