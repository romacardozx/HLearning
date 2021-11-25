const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const catDeleted = await Category.findOneAndUpdate(
      { _id: id },
      { status: "Deleted" },
      { new: true }
    );
    if (catDeleted) {
      res.json({ msg: "Category Deleted", catDeleted });
    } else {
      res.json({ msg: "Error! No se pudo hacer delete" });
    }
  } catch (error) {
    next(error);
  }
};
