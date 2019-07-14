// Require Express
const express = require('express');

// Router object 
const router = express.Router();

// Getting Order Controller
const OrderController = require('../../controllers/order.controller');

//Mapping each API to the controller functions

// Get all orders
router.get('/', OrderController.getOrders);

// Create an order
router.post('/create', OrderController.createOrder);

module.exports = router;
