const Category = require("../../models/Category");

// Delete Category. Recibe un id por params y elimina dicha categoria
//RECORDAR CONSULTAR SI borramos o cambiamos estado...no se rompe la DB borrando...queda rara nada mas
module.exports = async (req, res, next) => {
  const { id } = req.params;
  console.log(id, "que recibo")
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
