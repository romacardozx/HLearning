const Category = require("../../models/Category");

// Delete Category. Recibe un id por params y elimina dicha categoria
//RECORDAR CONSULTAR SI borramos o cambiamos estado...no se rompe la DB borrando...queda rara nada mas
module.exports = async (req,res,next)=>{
  const {id} = req.params;
  try {
     const catDeleted = await Category.findOneAndDelete({_id:id},{new:true});
     console.log(catDeleted)
     res.json({msg:"Category Deleted",catDeleted})
  } catch (error) {
      next(error)
  }
}