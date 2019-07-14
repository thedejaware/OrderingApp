// Require Order Model
const Order = require("../models/order");

// Creating new order
module.exports.createOrder = async function(paramOrder) {
  let newOrder = new Order(paramOrder);

  // Creating order
  let createdOrder = await newOrder.save();

  return createdOrder;
};

module.exports.getOrders = async function() {
  return await Order.find();
};
