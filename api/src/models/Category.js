const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: {
        type: String,
        unique:true,
        required: true,       
    },    
    status: {
        type: String,
        enum: ["Confirmed", "Deleted"],
        default: "Confirmed"
    }
})

module.exports = CategoryModel = mongoose.model('Category', CategorySchema)