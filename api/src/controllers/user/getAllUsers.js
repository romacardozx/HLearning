const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");
const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
  try {
    let users = await User.find({ status: "Confirmed" })
      .populate("courses")
      .populate("reviews")
      .populate("cart");
    if (users) {
      res.json(users);
    } else {
      res.json({ msg: "There're any user registred" });
    }
  } catch (err) {
    next(err);
  }
};
