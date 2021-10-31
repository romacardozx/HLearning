const Course = require("../../models/Course");

//Crear un nuevo curso
module.exports = async (req, res, next) => {
  const data = req.body;
  try {
    const course = new Course(data);
    await course.save();
    res.json({ msg: "Course created", course });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
