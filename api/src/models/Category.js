const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.Mixed,
        ref: 'Course'
    },
    status: {
        type: String,
        default: 'confirmed'
    }
})

module.exports = CategoryModel = mongoose.model('Category', CategorySchema)