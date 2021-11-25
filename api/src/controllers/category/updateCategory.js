const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const {name} = req.body;

  try {
    let category = await Category.findOneAndUpdate({ _id: id }, {name:name}, {
      new: true,
    });
   
    res.json({ msg: "Category updated", category });
  } catch (err) {
    next(err);
  }
};
