import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { 
  StyledForm, 
  StyledLabel,
  StyledAmountInput,
  StyledButton,
  StyledMessage
} from './StyledForm';
import {
  CardElement,
  Elements,
  useStripe,
  useElements

} from '@stripe/react-stripe-js';


const CheckoutForm = props => {

  const [amount, setAmount] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [ message, setMessage ] = useState('');
  const payload = {
    paymentAmount: amount
  };

  useEffect(() => {
    setClientSecret('');
    const getClientSecret = async () => {
      await axios.post('http://localhost:9000/api/intent', payload)
        .then(res => {
          setClientSecret(res.data.client_secret);
        }
        )
        .catch(error => {
          setClientSecret('');
          console.log(`[Error] - ${error}`);
        });

    };
    getClientSecret();
  }, [amount]);



  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (event) => {
    event.preventDefault();
    setClientSecret('');

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Pranay Aryals'
        }
      }
    });

    if (result.error) {
      setMessage(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setMessage('yay your payment went through!');
      }
    }

  }


  return (
    <StyledForm onSubmit={handleSubmit}>
      { message && <StyledMessage>{message}</StyledMessage>}
      <StyledLabel>Amount</StyledLabel>
      <StyledAmountInput type="text" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '34px',
              color: '#424770',
              marginTop: '1.5em',
              height: '2.5em',
              '::placeholder': {
                color: '#aab4c4'
              },
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
      <StyledButton type="submit" disabled={!stripe}>Pay</StyledButton>
    </StyledForm>
  )
}

export default CheckoutForm;