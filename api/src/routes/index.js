const express = require("express");
const router = express.Router();

const coursesRoutes = require('../routes/coursesRoutes');
router.use('/courses', coursesRoutes);


// router.use('/categories', CategoriesRoutes);


module.exports = router;