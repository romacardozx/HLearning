const Review = require('../../models/Review');
const User = require("../../models/User");
const Course = require("../../models/Course");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        let review = await Review.findOne({_id:id, status: "Confirmed"});
        if(review) {
            review = await User.populate(review, {path: "user"});
            review = await Course.populate(review, {path: "course"});
            res.json(review);
        } else {
            res.json({msg: "There's any review with that id"});
        }
    } catch(err) {
        next(err);
    }
}