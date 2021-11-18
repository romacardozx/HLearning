const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, price, duration, img } = req.body.state;
  const { selected } = req.body;

  if (!id) {
    res.status(400).json({
      error: "Insert an ID",
    });
  }
  const isTitleInDb = await Course.findOne({ title: title });
  if (isTitleInDb) {
    if (isTitleInDb.id !== id) {
      return res.status(400).json({
        error: "That title is already in use",
      });
    }
  }
  if (!title) {
    res.status(400).json({
      error: "Insert a title",
    });
  }
  if (!description) {
    res.status(400).json({
      error: "Insert the description",
    });
  }
  if (!price) {
    res.status(400).json({
      error: "Insert the price",
    });
  }
  if (!duration) {
    res.status(400).json({
      error: "Insert the duration",
    });
  }
  let finalCategories = selected.map((cat) => {
    return cat.value;
  });
  try {
    const course = await Course.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
        price,
        duration,
        img,
        categories: finalCategories,
      },
      { new: true }
    );
    if (course) {
      res.status(200).json(course);
    } else {
      res
        .status(404)
        .json({ msg: "The course that you're trying to edit doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
