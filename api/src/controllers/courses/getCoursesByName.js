const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
  const { name } = req.query;
  try {
    const includeName = await Course.find({ title: new RegExp(name, "i"), status: "Confirmed" });

    // SI ME PASAN UN NAME QUE NO EXISTE
    if(name.length === 0) {
      res.json({ msg: "Please insert a name to search the course" })

    // SI ME PASAN UN NAME DE CURSO QUE NO EXISTE
    } else if(includeName.length === 0) {
      res.json({msg: "We could not find any course with that name"})
    } else {
      res.json(includeName)
    }
  } catch (error) {
    console.log(error);
    return next();
  }
};