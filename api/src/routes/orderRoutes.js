const { Router } = require("express");
const express = require("express");

const createOrder = require('../controllers/order/createOrder')



const router = Router();
router.use(express.json());

router.post('/createOrder', createOrder);


module.exports = router