const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email: email, status: "Confirmed" });
  await Course.populate(userFound, { path: "courses" });
  await Review.populate(userFound, { path: "reviews" });

  if (!userFound) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(userFound);
};
