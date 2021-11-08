const Course = require('../../models/Course');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const newDataCourse = req.body;
    try {
        const course = await Course.findOneAndUpdate({_id: id},
            newDataCourse, {
                new:true
            });
        if(course) {
            res.json(course)
        } else {
            res.json({msg: "The course that you're trying to edit doesn't exist"})
        }
    } catch(err) {
        console.log(err);
        next(err)
    }
}