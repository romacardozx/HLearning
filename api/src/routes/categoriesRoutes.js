const { Router } = require('express');
const express = require('express');
const createCategory = require('../controllers/category/createCategory');
const getAllCategories = require('../controllers/category/getAllCategories');
const updateCategoryById = require('../controllers/category/updateCategory');
const deleteCategoryById = require('../controllers/category/deleteCategory')

const router = Router();
router.use(express.json());
router.get('/', getAllCategories);
router.post('/createCategory', createCategory);
router.put('/:id', updateCategoryById);
router.delete('/:id', deleteCategoryById)


module.exports = router