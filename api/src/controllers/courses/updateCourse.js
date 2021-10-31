const Course = require('../../models/Course');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const newDataCourse = req.body;
    try {
        const course = await Course.findOneAndUpdate({_id: id},
            newDataCourse, {
                new:true
            });
            res.json(course)
    } catch(err) {
        console.log(err);
        next(err)
    }
}