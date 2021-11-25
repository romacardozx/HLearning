const { Router } = require('express');
const express = require('express');
const getCart = require('../controllers/cart/getCart');
const createCart = require('../controllers/cart/createCart');
const updateCart = require('../controllers/cart/updateCart');

const router = Router();
router.use(express.json());

router.get('/', getCart);
router.post('/createCart', createCart);
router.put('/:id', updateCart);

module.exports = router