const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
  courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",       
      required: true,       
  }],
  price: {
    type: Number,
    required: true, 
  },
  status: {
    type: String,
    enum: ["Confirmed", "Cancel"],
    default: "Confirmed"
},
  payment: {
    type: Boolean,
    required: true,
    default:false 
  }  
});

module.exports = mongoose.model("Order", OrderSchema);