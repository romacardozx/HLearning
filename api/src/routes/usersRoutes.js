const { Router } = require("express");
const express = require("express");

const createUser = require('../controllers/user/createUser')



const router = Router();
router.use(express.json());

router.post('/createUser', createUser);



module.exports = router