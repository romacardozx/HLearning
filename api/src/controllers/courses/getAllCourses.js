const Course = require("../../models/Course");
const Category = require("../../models/Category");
const Review = require("../../models/Review");
const User = require("../../models/User");



module.exports = async (req, res, next) => {
   


  try {
    
        let courses = await Course.find({ status: "Confirmed" });
        if (courses) {
          
           
           courses = await Category.populate(courses, { path: "categories" });
           courses = await Review.populate(courses, { path: "score" });
           courses = await User.populate(courses, { path: "students" });
          } else {
            res.json({ msg: "There're any course available" });
          }
    
      res.json(courses);
    
  } catch (err) {
    console.log(err);
    next(err);
  }
}
