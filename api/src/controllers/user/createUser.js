const User = require("../../models/User");
const Cart = require("../../models/Cart");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary")

module.exports = async (req, res, next) => {
  try {
    const { name, password, email, pictures } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Ingrese un nombre",
      });
    }

    if (!password) {
      return res.status(400).json({
        error: "Ingrese una contraseña",
      });
    }

    if (!email) {
      return res.status(400).json({
        error: "Ingrese un email",
      });
    }

    const isUserInDB = await User.findOne({ email: email });
    if (isUserInDB) {
      return res.status(400).json({
        error: "El email ya se encuentra en uso",
      });
    }
    
    let user = new User({
      name,
      password,
      email,
      pictures,
    });
    
    const cart = new Cart({ user: user._id });
    await cart.save();

    user.cart = cart._id;

    await user.save();
    res.status(200).json({
      msg: "User created",
      user,
    });
  } catch (err) {
    next(err);
  }
};
