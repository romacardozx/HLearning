const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
  const {id} = req.params; 
  try {
    const course = await Course.findById({_id:id}).populate("categories", "name")
    res.json(course);
  } catch (err) {    
    console.log(err);
    next(err)
  }
};
