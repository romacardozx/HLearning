const { Router } = require('express');
const express = require('express');

const getAllCourses = require('../controllers/courses/getAllCourses');
const getCourseById = require('../controllers/courses/getCourseById');

const createCourse = require('../controllers/courses/createCourse');

const updateCourse = require('../controllers/courses/updateCourse');

const deleteCourse = require('../controllers/courses/deleteCourse');

const getCoursesByName = require('../controllers/courses/getCoursesByName');

const router = Router();
router.use(express.json());

// ----> GET <----
router.get('/', getAllCourses);
router.get('/search', getCoursesByName);
router.get('/:id', getCourseById);


// ----> POST <----
router.post('/createCourse', createCourse);

// ----> PUT <----
router.put('/update/:id', updateCourse);

// ----> DELETE <----
router.delete('/delete/:id', deleteCourse);

module.exports = router