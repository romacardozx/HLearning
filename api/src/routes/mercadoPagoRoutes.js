const { Router } = require("express");
const express = require("express");

const mercadoPago = require("../controllers/mercadoPago/mercadoPago")
const pagos = require("../controllers/mercadoPago/payment");

const router = Router();
router.use(express.json());


// TIENE QUE SER UN POST 
router.post("/:id", mercadoPago);
router.get("/pagos/:id", pagos);

module.exports = router;