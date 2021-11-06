const Order = require("../../models/Order");

module.exports = async (req, res, next) => {
  const {id} = req.params; 
  try {
    const order = await Order.findOne({_id:id, status: "Confirmed"});
    if(order){     
      res.json(order);
    }else{
      res.json({msg:"No se encontro Orden"})
    }
    
  } catch (err) {    
    console.log(err);
    next(err)
  }
};
