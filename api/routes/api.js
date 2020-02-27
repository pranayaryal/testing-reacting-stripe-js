const dotenv = require('dotenv');
dotenv.config();
var express = require('express');

const stripe = require('stripe')(process.env.SECRET_KEY);
const bodyParser = require('body-parser');
var router = express.Router();

router.post("/intent", async (req, res, next) => {

  const { paymentAmount } = req.body;
  console.log(`The request is ${paymentAmount}`);
  await stripe.paymentIntents.create({
    amount: paymentAmount * 100,
    currency: 'usd',
    payment_method_types: ['card']
  })
  .then(response => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
  })
  .catch(error => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(error));
  });

});

module.exports = router;