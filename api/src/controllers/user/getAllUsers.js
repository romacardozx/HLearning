const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");

module.exports = async (_req, res, next) => {
    try {
        // SOLUCIONAR TEMA DE POPULARLE EL CURSO Y LA REVIEW
        let users = await User.find({status: "Confirmed"});
        if(users.length >= 0) {
            res.json (users);
        } else {
            res.json({msg: "There're any user registred"})
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}

