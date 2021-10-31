const Course = require("../../models/Course");

module.exports = async (_req, res, next) => {
  try {
    const courses = await Course
      .find()
      .populate("categories", "name"); //saque el -id
    res.json(courses);
  } catch (err) {
    next(err);
  }
};