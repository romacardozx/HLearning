const Order = require("../../models/Order");

//ANDANDO PERFECTO Y POPULADO NUEVO ACOTADO (YAMILA)
//Esta ruta recibe un id por params y devuelve la orden  que coincida con ese Id y chequea que sea Confirmed, con sus datos bien populados
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
    console.log(err);
    next(err);
  }
};
