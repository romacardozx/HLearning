const Order = require("../../models/Order");

//Crear Una nueva orden 
module.exports = async (req, res, next) => {
  const data = req.body;
  try {
    const order = new Order(data);
    await order.save();
    res.json({ msg: "Order created", order });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
