const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
  const categories = await Category
    .find()
    // .populate("courses", "title -_id");
  try {
    res.json(categories);
  } catch (err) {
    next(err);
  }
};