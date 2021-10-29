const Course = require('../../models/Course');

//Crear un nuevo curso
module.exports = async (req, res, next) => {
    const course = new Course(req.body);
    console.log('estoy aca')
    try {
      await course.save();
      res.json({ msg: "Course created", course });
    } catch (error) {
      console.log(error);
      
    }
  };