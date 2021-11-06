const express = require("express");
const router = express.Router();

const coursesRoutes = require('../routes/coursesRoutes');
router.use('/courses', coursesRoutes);

const categoriesRoutes = require('../routes/categoriesRoutes')
router.use('/categories', categoriesRoutes);

const UsersRoutes = require('../routes/usersRoutes')
router.use('/user', UsersRoutes);




module.exports = router;