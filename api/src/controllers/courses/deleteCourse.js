const Course = require('../../models/Course');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        let course = await Course.findOneAndUpdate({_id:id}, {status: "Deleted"})
        res.json({msg: 'Course deleted'})
    } catch(err) {
        console.log(err);
        next(err);
    }
}