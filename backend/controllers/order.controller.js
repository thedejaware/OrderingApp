// Require Order Service
const OrderService = require('../services/order.service');

// Creating Order
module.exports.createOrder = async function (req, res, next) {

    try {

        // Creating order
        let createdOrder = await OrderService.createOrder(req.body);
        
        return res.json({
            success: true,
            status: 201,
            data: createdOrder,
            message: 'Order succesfully created'
        });

    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: 'Unable to create order',
            errorMessage: error.message
        });
    }
}

// Getting Orders
module.exports.getOrders = async function (req, res, next) {
    try {

        // Getting orders
        let orders = await OrderService.getOrders();
        
        return res.json({
            success: true,
            status: 201,
            data: orders,
            message: 'Success'
        });

    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: 'Unable to get orders',
            errorMessage: error.message
        });
    }
}