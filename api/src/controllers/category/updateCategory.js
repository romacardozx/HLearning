const Category = require("../../models/Category");

// Update Category. Recibe un id por params, la info a modificar por body y edita dicha categoria
//RECORDAR CONSULTAR SI SE QUIERE CAMBIAR A ESTADO UPDATE EL STATUS DE LAS CATEGORIAS
module.exports = async (req, res, next) => {
  const { id } = req.params;
  const newData = req.body;

  try {
    let category = await Category.findOneAndUpdate({ _id: id }, newData, {
      new: true,
    });
   
    res.json({ msg: "Category updated", category });
  } catch (err) {
    next(err);
  }
};
