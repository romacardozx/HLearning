const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await User.findById({ _id: id, status: "Confirmed" });
    if (user) {
      user = await Course.populate(user, { path: "courses" });
      user = await Review.populate(user, { path: "reviews" });
      res.json(user);
    } else {
      res.json({ msg: "There's any user with that id" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
