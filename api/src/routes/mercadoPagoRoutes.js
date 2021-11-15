const { Router } = require("express");
const express = require("express");

const mercadoPago = require("../controllers/mercadoPago/mercadoPago")
const payment = require("../controllers/mercadoPago/payment");

const router = Router();
router.use(express.json());


// TIENE QUE SER UN POST
router.get("/:id", mercadoPago);
// router.get("/payment", payment)

module.exports = router;