const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
  const { name } = req.query;
  try {
    const includeName = await Course.find({ title: new RegExp(name, "i"), status: "Confirmed" });

    // SI ME PASAN UN NAME VACÍO O QUE NO EXISTE
    if(name.length === 0 || includeName.length === 0) {
      res.json({ msg: "Please insert a valid course name to search" })
    } else {
      res.json(includeName)
    }
  } catch (error) {
    console.log(error);
    return next();
  }
};