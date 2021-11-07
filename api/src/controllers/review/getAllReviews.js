const Review = require('../../models/Review');

module.exports = async (req, res, next) => {
    try {
        let review = await Review.find(); //Saque esto dentro del Find que rompia la Ruta {course: "_id"}(yamila)
        if(review) {
            res.json(review);
        } else {
            res.json({msg: "The review doesn't exist"});
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}