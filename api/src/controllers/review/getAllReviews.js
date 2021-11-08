const Review = require('../../models/Review');
const User = require('../../models/User');
const Course = require('../../models/Course');

module.exports = async (_req, res, next) => {
    try {
        let review = await Review.find({status: "Confirmed"});
        if(review.length > 0) {
            review = await User.populate(review, {path: "user"});
            review = await Course.populate(review, {path: "course"});
            res.json(review);
        } else {
            res.json({msg: "There're any review available"});
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}