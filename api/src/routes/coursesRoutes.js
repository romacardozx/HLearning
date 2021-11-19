const { Router } = require("express");
const express = require("express");

const getAllCourses = require("../controllers/courses/getAllCourses");
const getCoursesByName = require("../controllers/courses/getCoursesByName");
const getCourseById = require("../controllers/courses/getCourseById");
const getBoughtCourseById = require("../controllers/courses/getBoughtCourseById");

const createCourse = require("../controllers/courses/createCourse");

const updateCourse = require("../controllers/courses/updateCourse");

const deleteCourse = require("../controllers/courses/deleteCourse");

const router = Router();
router.use(express.json());

// ----> GET <----
router.get("/", getAllCourses);
router.get("/search", getCoursesByName);
router.get("/:id", getCourseById);
router.get("/boughtCourse/:id", getBoughtCourseById)

// ----> POST <----
router.post("/createCourse", createCourse);

// ----> PUT <----
router.put("/update/:id", updateCourse);

// ----> DELETE <----
router.post("/delete/:id", deleteCourse);

module.exports = router;
