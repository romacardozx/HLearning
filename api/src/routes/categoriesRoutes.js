const { Router } = require('express');
const express = require('express');
const createCategory = require('../controllers/category/createCategory');
const getAllCategories = require('../controllers/category/getAllCategories');
const updateCategoryById = require('../controllers/category/updateCategory');
const deleteCategoryById = require('../controllers/category/deleteCategory');
const getCategoryById = require('../controllers/category/getCategoryById');

const router = Router();
router.use(express.json());

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/createCategory', createCategory);
router.put('/delete/:id', deleteCategoryById);
router.put('/:id', updateCategoryById);


module.exports = router