import React, { useState } from 'react';
import axios from 'axios';

import { StyledForm, StyledLabel, StyledAmountInput, StyledButton } from './StyledForm';
import {
  CardElement,
  Elements,
  useStripe,
  useElements

} from '@stripe/react-stripe-js';

const CheckoutForm = props => {

  const [ amount, setAmount ] = useState(0);
  
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      paymentAmount: amount
    }

    await axios.post('http://localhost:9000/api/intent', payload)
      .then( response => console.log(response))
      .catch( error => console.log(`[Error] - ${error}`));

    // const result = await stripe.confirmCardPayment('{}', {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //     billing_details: {
    //       name: 'Jenny Rosen'
    //     }
    //   }
    // })

    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement)
    // });

    // if (error) {
    //   console.log('[Error]', error);

    // } else {
    //   console.log('[PaymentMethod]', paymentMethod);
    // }
    // if (result.error){
    //   console.log(result.error.message);
    // } else {
    //   if (result.paymentIntent.status === 'succeeded') {
    //     console.log('yay succeeded');
    //   }
    // }
  }


  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Amount</StyledLabel>
      <StyledAmountInput type="text" name="amount" value={amount} onChange={e => setAmount(e.target.value)}/>
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