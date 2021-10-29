const { Router } = require('express');
const express = require('express');
const createCategory = require('../controllers/category/createCategory');

const router = Router();
router.use(express.json());
router.post('/createCategory', createCategory);


module.exports = router