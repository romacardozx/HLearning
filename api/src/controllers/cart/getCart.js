const Cart = require("../../models/Cart");

//Update de cart. Mirar bien que recibe por query el id de USUARIO!!! Busca el carrito con el dato de id de usuario
module.exports = async (req, res, next) => {
  const { id } = req.query;
  try {
    let cart = await Cart.findOne({ user: id })
      .populate("user", "name")
      .populate("courses");
    if (cart) {
      res.json(cart);
    } else {
      res.json({ msg: "Cart not found" });
    }
  } catch (err) {
    next(err);
  }
};
