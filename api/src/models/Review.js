const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, 
      },
    description: {
        type: String        
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",       
        required: true,       
    },
    score: {
        type: Number,
        required: true
    }
})

module.exports = ReviewModel = mongoose.model('Review', ReviewSchema)