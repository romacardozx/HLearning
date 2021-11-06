const { Router } = require("express");
const express = require("express");

const createReview = require('../controllers/review/createReview')



const router = Router();
router.use(express.json());

router.post('/createReview', createReview);



module.exports = router