const { Router } = require('express');
const express = require('express');
const createCategory = require('../controllers/category/createCategory');
const getAllCategories = require('../controllers/category/getAllCategories');

const router = Router();
router.use(express.json());

router.get('/', getAllCategories);
router.post('/createCategory', createCategory);


module.exports = router