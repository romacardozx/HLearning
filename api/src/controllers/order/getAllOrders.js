const Order = require("../../models/Order");
const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");

//REVISADA...ANDA TODO OK!! REVISADO POPULADO YAMILA
module.exports = async (_req, res, next) => {
  try {
    const allOrders = await Order.find({ status: "Confirmed" })
      .populate("user", "name email")
      .populate("courses", "title");
    if (allOrders) {
      res.json(allOrders);
    } else {
      res.json({ msg: "There're any orders" });
    }
  } catch (err) {
    next(err);
  }
};
