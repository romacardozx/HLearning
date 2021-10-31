const Course = require("../../models/Course");

module.exports = async ( req, res, next) => {
  const courses = await Course
    .find()
    .populate("categories", "name -_id");
  try {
    let { abc } = req.query; 
    
    if(abc){
      if(order === "A-Z" || !order || order === ""){
        coursesOrder = courses.sort((a,b) =>{
            if(a.name > b.name) return 1;
            if(b.name > a.name) return -1; 
            return 0; 
        })
        return res.send(coursesOrder)
      } if(order === "Z-A" || !order || order === ""){
      coursesOrder = courses.sort((a,b) =>{
          if(a.name > b.name) return -1;
          if(b.name > a.name) return 1; 
          return 0;
      })
      return res.send(coursesOrder)
      }
    }
    if(score){
      if(score === "Asc" || !score || score ===""){
          orderScore = courses.sort((a,b) => {
              if(a.score > b.score) return 1;
              if (a.score < b.score)return -1;
              return 0;    
          })
          return res.send(orderScore)
        } if(score === "Desc" || !score || score ===""){
            orderScore = courses.sort((a,b) => {
              if(a.score > b.score) return -1;
              if (a.score < b.score)return 1;
              return 0;    
          })
      return res.send(orderScore);
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
    }else res.json(courses);
      
  } catch (err) {
    next(err);
  }
};