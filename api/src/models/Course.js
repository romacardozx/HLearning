const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    score: {
        type: Number
    },
    duration: {
        type: Number
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
            title,
            link,
            duration
        }]
    },
    students: {
        type: Number
    }
})

module.exports = courseModel = mongoose.model('Course', CourseSchema)