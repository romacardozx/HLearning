const Review = require('../../models/Review');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        let review = await Review.findOneAndUpdate({_id:id}, {status: "Deleted"});
        if(review) {
            res.json({msg: "Review deleted"});
        } else {
            res.json({msg: "The review that you're trying to delete doesn't exist"})
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}