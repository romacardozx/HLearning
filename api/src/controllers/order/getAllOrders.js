const Order = require("../../models/Order");
const User = require("../../models/User");


module.exports = async (_req, res, next) => {
  try {
    let allOrders = await Order.find({status: "Confirmed"})     
    if(allOrders.length >=0){
    allOrders = await User.populate(allOrders, {path: "user"})
  } else {
    res.json({msg: "There're any orders"})
  }
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
};