const { Router } = require("express");
const express = require("express");

const getAllUsers = require("../controllers/user/getAllUsers");
const getUserById = require("../controllers/user/getUserById");

const createUser = require('../controllers/user/createUser');

const updateUser = require('../controllers/user/updateUser');

const deleteUser = require('../controllers/user/deleteUser');

const router = Router();
router.use(express.json());

// ----> GET <----
router.get("/", getAllUsers);
router.get("/:id", getUserById);

// ----> POST <----
router.post('/createUser', createUser);

// ----> PUT <----
router.put("/updateUser/:id", updateUser);

// ----> DELETE <----
router.post("/delete/:id", deleteUser); 

module.exports = router