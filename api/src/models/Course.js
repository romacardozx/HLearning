const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    score: {                 //ref a review?
        type: Number
    },
    duration: {
        type: String,  
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    price: {
        type: Number
    },
    videos: {
        type: Array,
        default: [{
            name: String,
            link: String,
            duration: String
        }]
    },
    students: {
        type: Number
    },
    status: {
        type: String,
        enum: ["Confirmed", "In course", "Deleted"],
        default: "Confirmed"
    }
})

module.exports = CourseModel = mongoose.model('Course', CourseSchema) 