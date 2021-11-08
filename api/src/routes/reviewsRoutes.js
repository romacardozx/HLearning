const { Router } = require("express");
const express = require("express");

const getAllReviews = require('../controllers/review/getAllReviews');
const getReviewById = require('../controllers/review/getReviewById');

const createReview = require('../controllers/review/createReview');

const updateReview = require('../controllers/review/updateReview');

const deleteReview = require('../controllers/review/deleteReview');

const router = Router();
router.use(express.json());

// ----> GET <----
router.get('/', getAllReviews);
router.get('/:id', getReviewById);

// ----> POST <----
router.post('/createReview', createReview);

// ----> PUT <----
router.put("/update/:id", updateReview);

// ----> DELETE <----
router.post("/delete/:id", deleteReview);

module.exports = router