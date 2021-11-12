const Order = require("../../models/Order");

//PROBADA POR POSTMAN Y ANDANDO OK(YAMILA)
//Crear Una nueva orden a partir del objeto que recibe por body(chequear mandar todos los datos del modelo completos y ver cuales son requeridos)
module.exports = async (req, res, next) => {
  const data = req.body;
  console.log(data,"datos que llegan")
  try {
    const order = new Order(data);
    await order.save();
    res.json({ msg: "Order created", order });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
