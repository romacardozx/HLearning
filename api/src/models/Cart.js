const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
  courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",       
      default:[],       
  }],
  price: {
    type: Number,
    default:0, 
  },
  status: {
    type: String,
    enum: ["Confirmed", "Deleted"],
    default: "Confirmed"
}
});

module.exports = mongoose.model("Cart", CartSchema);