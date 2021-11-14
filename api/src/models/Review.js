const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false, 
      },
    description: {
        type: String        
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",       
        required: false,       
    },
    score: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        enum: ["Confirmed", "Deleted"],
        default: "Confirmed",
      }
})

module.exports = ReviewModel = mongoose.model('Review', ReviewSchema)