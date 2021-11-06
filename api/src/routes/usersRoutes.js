const { Router } = require("express");
const express = require("express");

const getAllUsers = require("../controllers/user/getAllUsers");
const getUserById = require("../controllers/user/getUserById");

const createUser = require('../controllers/user/createUser')

const deleteUser = require('../controllers/user/deleteUser');

const router = Router();
router.use(express.json());

// ----> GET <----
router.get("/", getAllUsers);
// router.get("/:id", getUserById);

// ----> POST <----
// router.post('/createUser', createUser);

// ----> PUT <----

// ----> DELETE <----
// router.delete("/deleteUser/:id", deleteUser); 

module.exports = router