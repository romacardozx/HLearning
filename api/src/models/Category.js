const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }],
    status: {
        type: String,
        default: 'confirmed'
    }
})

module.exports = CategoryModel = mongoose.model('Category', CategorySchema)