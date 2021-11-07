const { Router } = require("express");
const express = require("express");

const createOrder = require('../controllers/order/createOrder');
const getAllOrders = require("../controllers/order/getAllOrders");
const getOrderById = require("../controllers/order/getOrderById");



const router = Router();
router.use(express.json());

router.post('/createOrder', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);


module.exports = router