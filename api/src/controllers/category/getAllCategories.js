const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
  try {
    const categories = await Category
      .find()
      // .populate("courses", "title -_id");
    res.json(categories);
  } catch (err) {
    next(err);
  }
};