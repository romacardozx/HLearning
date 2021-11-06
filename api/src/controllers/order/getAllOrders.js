const Order = require("../../models/Order");

module.exports = async (_req, res, next) => {
  try {
    const allOrders = await Order.find({status: "Confirmed"})     
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
};