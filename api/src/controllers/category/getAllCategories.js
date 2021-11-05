const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
  try {
    const allCategories = await Category.find({status: "Confirmed"})     
    res.json(allCategories);
  } catch (err) {
    next(err);
  }
};