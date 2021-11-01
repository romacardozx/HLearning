const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,       
    },
    // courses: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Course',        Al no haber ida y vuelta y que se actualicen los cursos q se cargan a 
    //     required: true,       a esta categoria, esto pierde razon de ser...   
    //     // default:""
    // }],
    status: {
        type: String,
        default: 'confirmed'
    }
})

module.exports = CategoryModel = mongoose.model('Category', CategorySchema)