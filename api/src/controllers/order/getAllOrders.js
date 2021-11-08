const Order = require("../../models/Order");
const User = require("../../models/User");
const Course = require("../../models/Course")
const Review = require("../../models/Review")


module.exports = async (_req, res, next) => {
  try {
    let allOrders = await Order.find({status: "Confirmed"})     
    if(allOrders){
    allOrders = await User.populate(allOrders, {path: "user"})
    allOrders = await Course.populate(allOrders, {path: "courses"})
    allOrders = await Review.populate(allOrders, {path: "user.reviews"})
    res.json(allOrders);
  } else {
    res.json({msg: "There're any orders"})
  }
  } catch (err) {
    next(err);
  }
};