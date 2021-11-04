const Course = require("../../models/Course");
const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const {id} = req.params; 
  try {
    let course = await Course.findById({_id:id})
    if(!course){
      return res.json({ok:false,msg:"No se encontro ningun courso con ese Id"});
    }else{
     course = await Category.populate(course,{path:'categories'})
     console.log(course)
     res.json(course);
    }
    
  } catch (err) {    
    console.log(err);
    next(err)
  }
};
