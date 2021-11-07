const Course = require("../../models/Course");
const Category = require("../../models/Category");
const Review = require("../../models/Review");
// const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    let courses = await Course.find({status: "Confirmed"});
    if(courses.length >= 0) {
      courses = await Category.populate(courses, {path: "categories"});
      courses = await Review.populate(courses, {path: "score"});
      // courses = await User.populate(courses, {path: "students"}); // TIRA ERROR
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
    if(price){
      if(price === "Asc" || !price || price ===""){
        orderPrice = courses.sort((a,b) => {
            if(a.price > b.price) return 1;
            if (a.price < b.price)return -1;
            return 0;    
        })
        return res.send(orderPrice)
      } if(price === "Desc" || !price || price ===""){
          orderPrice = courses.sort((a,b) => {
            if(a.price > b.price) return -1;
            if (a.price < b.price)return 1;
            return 0;    
        })
    return res.send(orderPrice);
    
    }
    }
    if(priceToFilter){
      priceToFilter = parseInt(priceToFilter)
      if(priceToFilter <  1000 ){
        const priceToFilterLess = await Course
        .find({price: {$lt: 1000}})
        .populate('categories', 'name -_id')
         return res.send(priceToFilterLess)
       } 
      if(priceToFilter >= 1000 && priceToFilter < 1500){
        const priceToFilterBetween = await Course
         .find({price: {$gte: 1000, $lt: 1500}})
         .populate('categories', 'name -_id')
         return res.send(priceToFilterBetween)
       } 
      if(priceToFilter >= 1500 && priceToFilter < 2000){
        const priceToFilterBetween2 = await Course
         .find({price: {$gte: 1500, $lt: 2000}})
         .populate('categories', 'name -_id')
         return res.send(priceToFilterBetween2)
       } 
      if(priceToFilter >= 2000 && priceToFilter < 2500){
         const priceToFilterBetween3 = await Course
         .find({price: {$gte: 2000, $lt: 2500}})
         .populate('categories', 'name -_id')
         return res.send(priceToFilterBetween3)
       } 
      if(priceToFilter >=  2500){
         const priceToFilterGrater = await Course
         .find({price: {$gte: 2500}})
         .populate('categories', 'name -_id')
         return res.send(priceToFilterGrater)
       } 
     }
     if(categories){
         const videoFiltercategory = await Course
         .find({categories: {$all: [`${categories}`]}})
         .populate()
         return res.send(videoFiltercategory)
     } 
     if (scoreToFilter) {
      // ojo que se puede necesitar un parseInt
     if(scoreToFilter <=  0.4 ){
       const scoreToFilterLess = await Course
       .find({score: {$lte: 0.4}})
       .populate('categories', 'name -_id')
        return res.send(scoreToFilterLess)
      }
      if(scoreToFilter > 0.4 && scoreToFilter <= 1.4){
       const scoreToFilterBetween = await Course
       .find({score: {$gt: 0.4, $lte: 1.4}})
       .populate('categories', 'name -_id')
       return res.send(scoreToFilterBetween)
     } 
      if(scoreToFilter > 1.4 && scoreToFilter <= 2.4){
       const scoreToFilterBetween2 = await Course
       .find({score: {$gt: 1.4, $lte: 2.4}})
       .populate('categories', 'name -_id')
       return res.send(scoreToFilterBetween2)
     } 
      if(scoreToFilter > 2.4 && scoreToFilter <= 3.4){
       const scoreToFilterBetween3 = await Course
       .find({score: {$gt: 2.4, $lte: 3.4}})
       .populate('categories', 'name -_id')
       return res.send(scoreToFilterBetween3)
     } 
      if(scoreToFilter > 3.4 && scoreToFilter <= 4.4){
       const scoreToFilterBetween4 = await Course
       .find({score: {$gt: 3.4, $lte: 4.4}})
       .populate('categories', 'name -_id')
       return res.send(scoreToFilterBetween4)
     } 
      if(scoreToFilter > 4.4 ){
       const scoreToFilterBetween5 = await Course
       .find({score: {$gt: 4.4}})
       .populate('categories', 'name -_id')
       return res.send(scoreToFilterBetween5)
     } 
    }
    else { res.json(courses) }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
