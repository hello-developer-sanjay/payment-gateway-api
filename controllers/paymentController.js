const Payment = require('../models/Payment');
const paymentProcessor = require('../services/paymentProcessor');

exports.processPayment = async (req, res) => {
  try {
    const { amount, currency, stripeToken } = req.body;
    const userId = req.user._id;
    const description = 'Payment for services';
    const charge = await paymentProcessor.processPayment(amount, currency, description, stripeToken);

    const payment = new Payment({ amount, currency, userId, chargeId: charge.id });
    await payment.save();
    res.json({ message: 'Payment processed successfully!', payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};
