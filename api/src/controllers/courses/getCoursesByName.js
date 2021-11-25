const Course = require("../../models/Course");
const Category = require("../../models/Category");
const Review = require("../../models/Review");
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  const { name } = req.query;
  
  try {
    let includeName = await Course.find({ title: new RegExp(name, "i"), status: "Confirmed" });
    includeName = await Category.populate(includeName, {path: "categories"});
    includeName = await Review.populate(includeName, {path: "score"});
    includeName = await User.populate(includeName, {path: "students"}); 

    if(name.length === 0 || includeName.length === 0) {
      res.json({ msg: "Please insert a valid course name to search" })
    } else {
      res.json(includeName)
    }
  } catch (error) {
    return next();
  }
};