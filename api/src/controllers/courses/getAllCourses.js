const Course = require("../../models/Course");

module.exports = async (_req, res, next) => {
  const courses = await Course
    .find()
    .populate("categories", "name"); //saque el -id
  try {
    res.json(courses);
  } catch (err) {
    next(err);
  }
};