const Review = require('../../models/Review');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const newDataReview = req.body;
    try {
        const review = await Review.findOneAndUpdate({_id: id},
            newDataReview, {
                new:true
            });
        if(review) {
            res.json(review)
        } else {
            res.json({msg: "The review that you're trying to edit doesn't exist"})
        }
    } catch(err) {
        console.log(err);
        next(err)
    }
}