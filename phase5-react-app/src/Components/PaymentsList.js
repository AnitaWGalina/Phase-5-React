import React, { useState } from 'react';
import StripeCheckout from "react-stripe-checkout"

const PaymentList = ({ user, order }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();


    // Call the backend to create a payment
    const response = await fetch('/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        user_id: user.id,
        order_id: order.id,
        card_number: cardNumber,
        expiration: expiration,
        cvc: cvc,
      }),
    });

    if (response.ok) {
      // Payment successful
      console.log('Payment successful!');
      setErrorMessage('');
    } else {
      // Payment failed
      const errorData = await response.json();
      console.error('Payment failed:', errorData.error);
      setErrorMessage(errorData.error);
    }
  };

  return (
          <div>
            <StripeCheckout
            //   token={onToken}
              stripeKey="pk_test_51Nb0CGE2sf0TqZrNWtqYYhBxivjJnEVsA2KlxtQNdBYywFhf27cCskbQJr89HsPjYrFM2s4YcRc8gxiumbKXYymg003bDAdLza"
            //   amount={destination.amount}
            //   name={destination.title}
            />
          </div>
  );
};

export default PaymentList;
