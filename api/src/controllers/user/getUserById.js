const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        // SOLUCIONAR TEMA DE POPULARLE EL CURSO Y LA REVIEW
        let user = await User.findById({_id:id, status: "Confirmed"});
        if(user) {
            res.json(user);
        } else {
            res.json({msg: "There's any user with that id"});
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}