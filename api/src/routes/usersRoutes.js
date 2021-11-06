const { Router } = require("express");
const express = require("express");



const router = Router();
router.use(express.json());

router.post('/', createUser);



module.exports = router