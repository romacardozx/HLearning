const Order = require("../../models/Order");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    let order = await Order.findOne({ _id: id, status: "Confirmed" })
      .populate("user", "name email")
      .populate("courses", "title");
    if (order) {
      res.json(order);
    } else {
      res.json({ msg: "Order not found" });
    }
  } catch (err) {
    next(err);
  }
};