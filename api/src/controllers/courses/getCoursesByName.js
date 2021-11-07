const Course = require("../../models/Course");
const Category = require("../../models/Category");
// const Review = require("../../models/Review")
// const User = require("../../models/User");

module.exports = async (req, res, next) => {
  const { name } = req.query;
  try {
    const includeName = await Course.find({ title: new RegExp(name, "i"), status: "Confirmed" });
    inlcudeName = await Category.populate(includeName, {path: "categories"});
    // includeName = await Review.populate(course, {path: "score"}) // NO POPULA
    // includeName = await User.populate(course, {path: "students"}); // TIRA ERROR

    // SI ME PASAN UN NAME VACÍO O QUE NO EXISTE
    if(name.length === 0 || includeName.length === 0) {
      res.json({ msg: "Please insert a valid course name to search" })
    } else {
      res.json(includeName)
    }
  } catch (error) {
    console.log(error);
    return next();
  }
};