const Course = require('../../models/Course');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Course.findOneAndDelete({_id:id})
        res.json({msg: 'Course deleted'})
    } catch(err) {
        console.log(err);
        next(err);
    }
}