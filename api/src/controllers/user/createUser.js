const User = require("../../models/User");
const Cart = require("../../models/Cart");
const bcrypt = require("bcrypt");

// Crear User desde el front (solo hacemos una copia de lo que administra Auth0)

module.exports = async (req, res, next) => {
  try {
    const { name, password, email } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Please provide a name",
      });
    }

    if (!password) {
      return res.status(400).json({
        error: "Please provide a password",
      });
    }

    if (!email) {
      return res.status(400).json({
        error: "Please provide an email",
      });
    }

    const isUserInDB = await User.findOne({ email: email });
    if (isUserInDB) {
      return res.status(400).json({
        error: "The email is already in use",
      });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({
      name,
      // password: hashedPassword,
      password,
      email,
    });
    
    //Aca se crea ya el carrito asociado a ese usuario!!
    const cart = new Cart({ user: user._id });
    await cart.save();

    user.cart = cart._id;

    await user.save();
    res.json({
      msg: "User created",
      user,
    });
  } catch (err) {
    next(err);
  }
};
