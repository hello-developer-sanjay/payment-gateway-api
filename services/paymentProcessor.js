const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (amount, currency, description, stripeToken) => {
  try {
    const charge = await stripe.charges.create({
      amount: amount,
    
      currency: currency,
      description: description,
      source: stripeToken,
    });
    return charge;
  } catch (error) {
    throw error;
  }
};
