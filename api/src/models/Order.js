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
    enum: ["Confirmed", "Deleted"],
    default: "Confirmed"
  },
  payment: {
    type: String,
    enum: ["Created", "Confirmed", "Processing", "Cancelled"],
    default: "Created"
  },
  paymentId: {
    type: String,
    default: "0"
  }
});

module.exports = mongoose.model("Order", OrderSchema);