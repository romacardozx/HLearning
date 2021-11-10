const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  pictures: {
    type: String,
    default:
      "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    default: "Password12345"
  },
  status: {
    type: String,
    enum: ["Confirmed", "Deleted"],
    default: "Confirmed",
  },
  isGoogle: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = UserModel = mongoose.model("User", UserSchema);
