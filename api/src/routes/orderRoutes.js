const { Router } = require("express");
const express = require("express");

const createOrder = require('../controllers/order/createOrder');
const deleteOrder = require("../controllers/order/deleteOrder");
const getAllOrders = require("../controllers/order/getAllOrders");
const getOrderById = require("../controllers/order/getOrderById");
const updateOrder = require("../controllers/order/updateOrder");

const router = Router();
router.use(express.json());

// ----> GET <----
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

// ----> POST <----
router.post('/createOrder', createOrder);
router.post('/delete/:id', deleteOrder);

// ----> PUT <----
router.post('/update/:id', updateOrder);


module.exports = router