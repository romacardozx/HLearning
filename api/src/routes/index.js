const express = require("express");
const router = express.Router();

const coursesRoutes = require('../routes/coursesRoutes');
router.use('/courses', coursesRoutes);

const categoriesRoutes = require('../routes/categoriesRoutes')
router.use('/categories', categoriesRoutes);

const usersRoutes = require('../routes/usersRoutes')
router.use('/users', usersRoutes);

const ordersRoutes = require('../routes/orderRoutes')
router.use('/order', ordersRoutes);

const reviewsRoutes = require('../routes/reviewsRoutes')
router.use('/reviews', reviewsRoutes);




module.exports = router;