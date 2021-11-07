const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
  try {
    let allCategories = await Category.find({ status: "Confirmed" });
    if (allCategories) {
      res.json(allCategories);
    } else {
      res.json({ msg: "Categories not found" });
    }
  } catch (err) {
    next(err);
  }
};
