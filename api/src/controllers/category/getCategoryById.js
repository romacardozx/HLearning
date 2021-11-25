const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const {id} = req.params; 
  try {
    let category = await Category.findOne({_id:id, status: "Confirmed"});
    if(category){     
      res.json(category);
    }else{
      res.json({msg:"Category not found"})
    }
    
  } catch (err) {    
    next(err)
  }
};
