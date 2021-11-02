const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
  try {
    const categories = await Category
      .find()     
    res.json(categories);
  } catch (err) {
    next(err);
  }
};