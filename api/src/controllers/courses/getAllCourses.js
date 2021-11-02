const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
  const courses = await Course.find().populate("categories", "name -_id");
  try {
    let { name, score, price, priceToFilter, categories } = req.query;

    if (name) {
      if (name === "A-Z" || !name || name === "") {
        coursesOrder = courses.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (b.title > a.title) return -1;
          return 0;
        });
        return res.send(coursesOrder);
      }
      if (name === "Z-A" || !name || name === "") {
        coursesOrder = courses.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (b.title > a.title) return 1;
          return 0;
        });
        return res.send(coursesOrder);
      }
    }
    if (score) {
      if (score === "Asc" || !score || score === "") {
        orderScore = courses.sort((a, b) => {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
          return 0;
        });
        return res.send(orderScore);
      }
      if (score === "Desc" || !score || score === "") {
        orderScore = courses.sort((a, b) => {
          if (a.score < b.score) return -1;
          if (a.score > b.score) return 1;
          return 0;
        });
        return res.send(orderScore);
      }
    }
    if (price) {
      if (price === "Asc" || !price || price === "") {
        orderPrice = courses.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
        return res.send(orderPrice);
      }
      if (price === "Desc" || !price || price === "") {
        orderPrice = courses.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
        return res.send(orderPrice);
      }
    }
    if (priceToFilter) {
      priceToFilter = parseInt(priceToFilter);
      if (priceToFilter <= 500) {
        const priceToFilterLess = await Course.find({
          price: { $lte: 500 },
        }).populate("categories", "name -_id");
        return res.send(priceToFilterLess);
      }
      if (priceToFilter > 500 && priceToFilter <= 1500) {
        const priceToFilterBetween = await Course.find({
          price: { $gt: 500, $lte: 1500 },
        }).populate("categories", "name -_id");
        return res.send(priceToFilterBetween);
      }
      if (priceToFilter > 1500 && priceToFilter <= 2500) {
        const priceToFilterBetween2 = await Course.find({
          price: { $gt: 1500, $lte: 2500 },
        }).populate("categories", "name -_id");
        return res.send(priceToFilterBetween2);
      }
      if (priceToFilter > 2500) {
        const priceToFilterGrater = await Course.find({
          price: { $gt: 2500 },
        }).populate("categories", "name -_id");
        return res.send(priceToFilterGrater);
      }
    }
    if (categories) {
      const videoFiltercategory = await Course.find({
        categories: { $all: [`${categories}`] },
      }).populate();
      return res.send(videoFiltercategory);
    } else {
      res.json(courses);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
