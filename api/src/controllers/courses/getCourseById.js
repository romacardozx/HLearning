const Course = require("../../models/Course");
const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const { id } = req.params; 
  try {
    let course = await Course.findById({_id:id})  //Chechu...aca devuelve sin contemplar el status!!
    course = await Category.populate(course,{path:'categories'})
    res.json(course);
    } catch (err) {    
    console.log(err);
    next(err)
  }
};
