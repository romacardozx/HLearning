const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const {id} = req.params; 
  try {
    const categoryName = await Category.findById({_id:id});
    res.json(categoryName);
  } catch (err) {    
    console.log(err);
    next(err)
  }
};
