const { Router } = require('express');
const express = require('express');
const createCourse = require('../controllers/courses/createCourse');
const getAllCourses = require('../controllers/courses/getAllCourses');
const getCourseById = require('../controllers/courses/getCourseById')

const router = Router();
router.use(express.json());
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/createCourse', createCourse);


module.exports = router