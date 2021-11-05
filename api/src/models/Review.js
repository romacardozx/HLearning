const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",       
        required: true,       
    },
    score: {
        type: Number,
        required: true
    },
})

module.exports = ReviewModel = mongoose.model('Review', ReviewSchema)