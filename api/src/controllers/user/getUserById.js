const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");

//Todo populado al maximo!
module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await User.findOne({ _id: id, status: "Confirmed" })
      .populate("courses")
      .populate("reviews")
      .populate("cart");
    if (user) {
      res.json(user);
    } else {
      res.json({ msg: "There's any user with that id" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
