const Cart = require("../../models/Cart");

//En esta ruta van a poder updatear el Cart con lo que esta en localstorage
module.exports = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const cart = await Cart.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (cart) {
      res.json(cart);
    } else {
      res.json({ msg: "The cart that you're trying to edit doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
