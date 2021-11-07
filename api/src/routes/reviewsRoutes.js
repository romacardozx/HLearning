const { Router } = require("express");
const express = require("express");

const getAllReviews = require('../controllers/review/getAllReviews')

const createReview = require('../controllers/review/createReview')

const router = Router();
router.use(express.json());

// ----> GET <----
router.get('/', getAllReviews)

// ----> POST <----
router.post('/createReview', createReview);

module.exports = router