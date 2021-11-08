const User = require("../../models/User");
const Course = require("../../models/Course");
const Review = require("../../models/Review");
const Category = require("../../models/Category");

module.exports = async (_req, res, next) => {
    try {
        let users = await User.find({status: "Confirmed"});
        if(users) {
            users = await Course.populate(users, {path: "courses"});
            users = await Category.populate(users, {path: "courses.categories"});
            users = await Review.populate(users, {path: "reviews"});
            res.json (users);
        } else {
            res.json({msg: "There're any user registred"});
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}

