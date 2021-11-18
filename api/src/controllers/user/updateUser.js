const User = require("../../models/User");

module.exports = async (req, res, next) => {
  const { input, id } = req.body;
  const { name, email, password, pictures } = input;

  if (!id) {
    res.status(400).json({
      error: "Insert an ID",
    });
  }
  if(!email){
    res.status(400).json({
      error: "Insert an email",
    });
  }
  if (!name) {
    res.status(400).json({
      error: "Insert a name",
    });
  }
  if (!password) {
    res.status(400).json({
      error: "Insert the password",
    });
  }
  if (!pictures) {
    res.status(400).json({
      error: "Insert an image",
    });
  }
  const isEmailInDB = await User.findOne({ email: email });
  if (isEmailInDB) {
    if (isEmailInDB.id !== id) {
      return res.status(400).json({
        error: "The email is already in use",
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
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ msg: "The user that you're trying to edit doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
