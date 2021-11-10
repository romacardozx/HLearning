const Course = require("../../models/Course");
const Category = require("../../models/Category");
const Review = require("../../models/Review");
const User = require("../../models/User");
// filterdata


const calculeScore = (arrayScores) => {
  let sumScore = 0;
  arrayScores.map((r) => {

    sumScore = sumScore + parseInt(r.score);
  });

  const totalScore = sumScore / arrayScores.length;

  return totalScore;
};

module.exports = async (req, res, next) => {
  try {
    let courses = await Course.find({status: "Confirmed"});
    if(courses) {
      courses = await Category.populate(courses, {path: "categories"});
      courses = await Review.populate(courses, {path: "score"});
      courses = await User.populate(courses, {path: "students"}); 
    } else {
      res.json({msg: "There're any course available"});
    }

    let { name, score, price, priceToFilter, categories, scoreToFilter } = req.query;

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
         return res.send(priceToFilterLess)
       } 
      if(priceToFilter >= 1000 && priceToFilter < 1500){
        const priceToFilterBetween = await Course
         .find({price: {$gte: 1000, $lt: 1500}})
        //  .populate('categories', 'name -_id')
         return res.send(priceToFilterBetween)
       } 
      if(priceToFilter >= 1500 && priceToFilter < 2000){
        const priceToFilterBetween2 = await Course
         .find({price: {$gte: 1500, $lt: 2000}})
        //  .populate('categories', 'name -_id')
         return res.send(priceToFilterBetween2)
       } 
      if(priceToFilter >= 2000 && priceToFilter < 2500){
         const priceToFilterBetween3 = await Course
         .find({price: {$gte: 2000, $lt: 2500}})
        //  .populate('categories', 'name -_id')
         return res.send(priceToFilterBetween3)
       } 
      if(priceToFilter >=  2500){
         const priceToFilterGrater = await Course
         .find({price: {$gte: 2500}})
        //  .populate('categories', 'name -_id')
         return res.send(priceToFilterGrater)
       } 
     }  
     if(categories){
         const videoFiltercategory = await Course
         .find({categories: {$all: [`${categories}`]}})
        //  .populate()
         return res.send(videoFiltercategory)
     }     
     if (scoreToFilter) {
       const scoreToFilterBetween5 = await Course
       .find({score: {$gt: 4.4}})
      //  .populate('categories', 'name -_id')
       return res.send(scoreToFilterBetween5)
    }
    else 
    { res.json(courses) }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
