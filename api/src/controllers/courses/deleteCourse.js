const Course = require('../../models/Course');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        let course = await Course.findOneAndUpdate({_id:id}, {status: "Deleted"});
        if(course) {
            res.json({msg: 'Course deleted'});
        } else {
            res.json({msg: "The course that you're trying to delete doesn't exist"});
        }
    } catch(err) {
        next(err);
    }
}