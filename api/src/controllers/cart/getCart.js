const Cart = require("../../models/Cart");

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
