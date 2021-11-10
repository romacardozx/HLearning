const { Router } = require('express');
const express = require('express');
const signIn = require("../controllers/auth/signIn");

const router = Router();
router.use(express.json());

router.post("/signin", signIn);

module.exports = router;


