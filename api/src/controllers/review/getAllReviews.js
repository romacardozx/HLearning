const Review = require('../../models/Review');

module.exports = async (req, res, next) => {
    try {
        let review = await Review.find({course: "_id"});
        if(review.length >=0) {
            res.json(review);
        } else {
            res.json({msg: "The review doesn't exist"});
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}