const Cart = require("../../models/Cart");

module.exports = async (req, res, next) => {
  const data = req.body;

  try {
    const cart = new Cart(data);
    await cart.save();
    res.json({ msg: "Cart created", cart });
  } catch (err) {
    next(err);
  }
};
