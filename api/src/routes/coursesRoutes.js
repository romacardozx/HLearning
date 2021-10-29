const { Router } = require('express');
const express = require('express');
const createCourse = require('../controllers/courses/createCourse');
const getAllCourses = require('../controllers/courses/getAllCourses')

const router = Router();
router.use(express.json());
router.get('/', getAllCourses)
router.post('/createCourse', createCourse);


module.exports = router