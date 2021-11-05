const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  client: {
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
    required: true, 
  },
  payment: {
    type: String,
    required: true, 
  },
  email: {               //quiza con user es suficiente
    type: String,
    required: true, 
  },
});

module.exports = mongoose.model("Order", OrderSchema);