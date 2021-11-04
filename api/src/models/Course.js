const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
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
        type: Schema.Types.Mixed,  
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
            duration: Number
        }]
    },
    students: {
        type: Number
    }
})

module.exports = CourseModel = mongoose.model('Course', CourseSchema) 