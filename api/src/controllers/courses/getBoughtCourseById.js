const Course = require("../../models/Course");
const Category = require("../../models/Category");
const Review = require("../../models/Review");
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    let course = await Course.findOne({ _id: id });
    if (course) {
      course = await Category.populate(course, { path: "categories" });
      course = await Review.populate(course, { path: "score" });
      course = await User.populate(course, {path: "students"}); 
      res.json(course);
    } else {
      res.json({ msg: "There's any course with that id" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
