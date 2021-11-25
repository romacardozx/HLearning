const Cart = require("../../models/Cart");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const cart = await Cart.findOneAndUpdate({ _id: id }, data, {
      new: true,
    })
      .populate("user", "name")
      .populate("courses");
    if (cart) {
      res.json(cart);
    } else {
      res.json({ msg: "The cart that you're trying to edit doesn't exist" });
    }
  } catch (err) {
    next(err);
  }
};
