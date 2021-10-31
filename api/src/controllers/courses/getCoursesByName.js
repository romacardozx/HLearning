const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
  const { name } = req.query;

  try {
    const includeName = await Course.find({ title: new RegExp(name, "i") });
    includeName.length > 0
      ? res.json(includeName)
      : res.json({ msg: "We could not find any course with that name" });
  } catch (error) {
    console.log(error);
    return next();
  }
};
