const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const {id} = req.params; 
  try {
    const category = await Category.findOne({_id:id, status: "Confirmed"});
    if(category){     
      res.json(category);
    }else{
      res.json({msg:"No se encontro Categoria"})
    }
    
  } catch (err) {    
    console.log(err);
    next(err)
  }
};
