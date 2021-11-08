const Order = require("../../models/Order");
const User = require("../../models/User");
const Course = require("../../models/Course")
const Review = require("../../models/Review")

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    let order = await Order.findOne({ _id: id, status: "Confirmed" });
    if (order) {
      order = await User.populate(order, { path: "user" });
      order = await Course.populate(order, { path: "courses" });
      order = await Review.populate(order, { path: "user.reviews" });
      res.json(order);
    } else {
      res.json({ msg: "Order not found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
