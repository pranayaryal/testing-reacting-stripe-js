/*jslint es6 */
const express = require('express');
const stripe = require('stripe')('sk_test_kgqSnqchn19Vya946n5TZDkp');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(pino);


app.post('/api/intent', (req, res) => {

  console.log(`The request is ${req}`);
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: 1099,
  //   currency: 'usd'
  // });

  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({
  //   'paymentIntent_id': paymentIntent.id
  // }));
});

app.listen(9000, () => console.log('Listening on port 9000'))