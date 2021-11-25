const User = require("../../models/User");

module.exports = async (req, res, next) => {
  const { input, id } = req.body;
  const { name, email, password, pictures } = input;

  if (!id) {
    res.status(400).json({
      error: "Ingresar un ID",
    });
  }
  if(!email){
    res.status(400).json({
      error: "Ingresar un email",
    });
  }
  if (!name) {
    res.status(400).json({
      error: "Ingresar un nombre",
    });
  }
  if (!password) {
    res.status(400).json({
      error: "Ingresar una contraseña",
    });
  }
  const isEmailInDB = await User.findOne({ email: email });
  if (isEmailInDB) {
    if (isEmailInDB.id !== id) {
      return res.status(400).json({
        error: "El email ya se encuentra en uso por otra persona",
      });
    }
  }

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        password,
        pictures,
      },
      {new: true}
    )
      .populate("courses")
      .populate("reviews")
      .populate("cart");
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ msg: "The user that you're trying to edit doesn't exist" });
    }
  } catch (err) {
    next(err);
  }
};
