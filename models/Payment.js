const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chargeId: { type: String, required: true }, // Stripe Charge ID
});

module.exports = mongoose.model('Payment', PaymentSchema);
