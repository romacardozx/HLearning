const Course = require("../../models/Course");
const Category = require("../../models/Category");
const Review = require("../../models/Review");
const User = require("../../models/User");

const calculeScore = (arrayScores) => {
  let sumScore = 0;
  arrayScores.map((r) => {

    sumScore = sumScore + parseInt(r.score);
  });

  const totalScore = sumScore / arrayScores.length;

  return totalScore;
};


module.exports = async (req, res, next) => {
  const filterCourses = req.body.hola
  console.log(filterCourses);
  
  

  try {
    
    // if(filterCourses.length > 0) {
    //    let courses = filterCourses
    //    console.log('courses de filtro', courses);
       
    //    courses = await Category.populate(courses, { path: "categories" });
    //    courses = await Review.populate(courses, { path: "score" });
    //   courses = await User.populate(courses, { path: "students" });
    // } else {
     let courses = await Course.find({ status: "Confirmed" });
    if (courses) {
      console.log('filtro de la base de datos', courses);
      
      courses = await Category.populate(courses, { path: "categories" });
      courses = await Review.populate(courses, { path: "score" });
      courses = await User.populate(courses, { path: "students" });
    } else {
      res.json({ msg: "There're any course available" });
    }
//}
    let { name, score, price, priceToFilter, categories, scoreToFilter } =
      req.query;

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
      
      if (score === "Desc" || !score || score === "") {
        orderScore = courses.sort((a, b) => {

          if (calculeScore(a.score) < calculeScore(b.score)) return 1;
          if (calculeScore(a.score) > calculeScore(b.score)) return -1;
          return 0;
        });
        return res.send(courses);
      }
      if (score === "Asc" || !score || score === "") {
        orderScore = courses.sort((a, b) => {
          if (calculeScore(a.score) < calculeScore(b.score)) return -1;
          if (calculeScore(a.score) > calculeScore(b.score)) return 1;
          return 0;
        });
        return res.send(courses);
      }
    }
    if (price) {  
      if (price === "Asc" || !price || price === "") {
        orderPrice = courses.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
        return res.send(orderPrice);
      }
      if (price === "Desc" || !price || price === "") {
        orderPrice = courses.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
        return res.send(orderPrice);
      }
    }
    if(priceToFilter){
      priceToFilter = parseInt(priceToFilter)
      if(priceToFilter <  1000 ){
        const priceToFilterLess = await Course
        .find({price: {$lt: 1000}})
        // .populate('categories', 'name -_id')
        return res.send(priceToFilterLess);
      }
      if (priceToFilter >= 1000 && priceToFilter < 1500) {
        const priceToFilterBetween = await Course.find({
          price: { $gte: 1000, $lt: 1500 },
        });
        //  .populate('categories', 'name -_id')
        return res.send(priceToFilterBetween);
      }
      if (priceToFilter >= 1500 && priceToFilter < 2000) {
        const priceToFilterBetween2 = await Course.find({
          price: { $gte: 1500, $lt: 2000 },
        });
        //  .populate('categories', 'name -_id')
        return res.send(priceToFilterBetween2);
      }
      if (priceToFilter >= 2000 && priceToFilter < 2500) {
        const priceToFilterBetween3 = await Course.find({
          price: { $gte: 2000, $lt: 2500 },
        });
        //  .populate('categories', 'name -_id')
        return res.send(priceToFilterBetween3);
      }
      if (priceToFilter >= 2500) {
        const priceToFilterGrater = await Course.find({
          price: { $gte: 2500 },
        });
        //  .populate('categories', 'name -_id')
        return res.send(priceToFilterGrater);
      }
    }
    if (categories) {
      const videoFiltercategory = await Course.find({
        categories: { $all: [`${categories}`] },
      })
    
      
      return res.send(videoFiltercategory);
    }
    if (scoreToFilter) {
      scoreToFilter = parseInt(scoreToFilter);
      // ojo que se puede necesitar un parseInt
      //  if(scoreToFilter <=  0.4 ){
      //    const scoreToFilterLess = await Course
      //    .find({score: {$lte: 0.4}})
      //   //  .populate('categories', 'name -_id')
      //     return res.send(scoreToFilterLess)
      //   }
      //   if(scoreToFilter > 0.4 && scoreToFilter <= 1.4){
      //    const scoreToFilterBetween = await Course
      //    .find({score: {$gt: 0.4, $lte: 1.4}})
      //   //  .populate('categories', 'name -_id')
      //    return res.send(scoreToFilterBetween)
      //  }
      //   if(scoreToFilter > 1.4 && scoreToFilter <= 2.4){
      //    const scoreToFilterBetween2 = await Course
      //    .find({score: {$gt: 1.4, $lte: 2.4}})
      //   //  .populate('categories', 'name -_id')
      //    return res.send(scoreToFilterBetween2)
      //  }
      //   if(scoreToFilter > 2.4 && scoreToFilter <= 3.4){
      //    const scoreToFilterBetween3 = await Course
      //    .find({score: {$gt: 2.4, $lte: 3.4}})
      //   //  .populate('categories', 'name -_id')
      //    return res.send(scoreToFilterBetween3)
      //  }
      //   if(scoreToFilter > 3.4 && scoreToFilter <= 4.4){
      //    const scoreToFilterBetween4 = await Course
      //    .find({score: {$gt: 3.4, $lte: 4.4}})
      //   //  .populate('categories', 'name -_id')
      //    return res.send(scoreToFilterBetween4)
      //  }
      if (scoreToFilter === 5) {
        const courses5stars = [];
        courses.map((c) => {
          const scoreTotal = calculeScore(c.score);
          if (scoreTotal === 5) {
            courses5stars.push(c);
          }
        });
        return res.send(courses5stars);
      }
    } else {
      res.json(courses);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
