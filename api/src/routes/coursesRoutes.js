const { Router } = require('express');
const express = require('express');
const createCourse = require('../controllers/courses/createCourse');

const router = Router();
router.use(express.json());
router.post('/createCourse', createCourse);


module.exports = router