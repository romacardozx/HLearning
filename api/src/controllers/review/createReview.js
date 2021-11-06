const Review = require("../../models/Review");

//Crear un nuevo curso
module.exports = async (req, res, next) => {
  const data = req.body;
  try {
    const review = new Review(data);
    await review.save();
    res.json({ msg: "Review created", review });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
