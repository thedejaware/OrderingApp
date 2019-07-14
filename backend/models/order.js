// Require mongoose
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderDetail: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;