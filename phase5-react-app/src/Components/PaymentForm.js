import React, { useState } from 'react';
// import Brand from './Brand';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
// import BackIcon from "../assets/icon-park-solid_back.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';

const PaymentForm = () => {
    const { total } = useParams();
    const { user } = useAuth()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [CheckoutRequestID, setCheckoutRequestID] = useState('');
  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState(total.toString())

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
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('stkpush', data);
        setCheckoutRequestID(data[1].CheckoutRequestID);
      });
  };

  const handleMpesaQuery = () => {
    setLoading(true); // Start loading

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
        sendPaymentDetailsToBackend(phoneNumber, '1', CheckoutRequestID);

          toast.success('Payment Successful');
        } else {
          toast.error('Payment Failed');
        }
        // Clear the form
        setPhoneNumber('');
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  const sendPaymentDetailsToBackend = (phoneNumber) => {
    const requestBody = {
      phoneNumber: phoneNumber,
      user_id: user.id,
      amount: amount,
      chama_id: user.id,
      checkout_request_id:CheckoutRequestID

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
        // Handle the response as needed
        console.log(data);
      });
  };

  return (
    <>
    <CardContainer>
    {/* <BackIconWrapper onClick={handleGoBack} to="/chamaDetails"> */}
        {/* <img /*src={BackIcon}*/ /*alt="Back" /> */}
    {/* </BackIconWrapper> */}

    <div style={{marginTop: "40px"}} className=" container">
        <div className="row">

            <div className="col-md-6 mx-auto">
                <div id="first">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                {/* <Brand/> */}
                                < ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme='colored'
                                 />
                            </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <Heading size="s" textAlign="center" textColor="green">CONFIRM MPESA PAYMENT OF KSHS {amount}</Heading>
                            </div>
                            <div className="col-md-12 text-center">
                                {/* mpesa logo */}
                                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img
                                        style={{ marginTop: '-30px' }}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png"
                                        alt="mpesa logo"
                                        width="100px"
                                        height="100px"
                                    />
                                </Box>
                                <Text textAlign="center">Enter your phone number below to pay for Chama-ke with M-pesa
                                    <br />
                                    You will receive a prompt to enter your M-Pesa PIN on your phone
                                    to complete the transaction.
                                </Text>
                            </div>

                            <form
                            style={{padding: "30px", border: "1px solid #ccc", borderRadius: "5px" }}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                                    <StyledInput
                                    type="text"
                                    name="phone"
                                    className="form-control"

                                    id="phone"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    aria-describedby="emailHelp"
                                    placeholder='Enter your phone number'
                                    required
                                    />
                                    <p>
                                        <small>
                                           Must be in the format '2547xxxxxxxx'
                                        </small>
                                    </p>
                                </div>
                            </form>
                            <div className="col-md-12 text-center "style={{marginTop: "15px"}}>
                            <Flex justifyContent="space-between">
                                <GreenButton style={{marginRight: "15px"}} type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm"
                                onClick={
                                   ()=> {
                                    window.confirm("Are you sure you want to pay for chama?") && handleMpesaStkPush()
                                   }
                                }
                                >Send Prompt</GreenButton>
                                <span>
                                <GreenButton type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm"
                                onClick={
                                   ()=> {
                                    setTimeout(() => {
                                        handleMpesaQuery()
                                    }, 5000);
                                   }
                                }
                                >Pay</GreenButton>
                                </span>
                            </Flex>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            </CardContainer>
            {loading && (
        <LoaderOverlay>
          <Loader />
        </LoaderOverlay>
      )}
    </>
  )
}



const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  align:center;
  margin:auto;
  margin-top:50px;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box-shadow here */

  max-width: 500px;
`;
const BackIconWrapper = styled(Link)`
  position: absolute;
  top: 20px;
  left: 40px;
`;
const GreenButton = styled.button`
  margin-right: 15px;
  background-color: #15B76C;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
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
    border-color: #007BFF;
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

export default PaymentForm