import React from 'react';
import logo from './logo.svg';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements

} from '@stripe/react-stripe-js';

import './App.css';
import CheckoutForm from './components/CheckoutForm';

const stripePromise = loadStripe('pk_test_j8RzazkDnk8i4oaguikkv4gO');

const App = () => {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
