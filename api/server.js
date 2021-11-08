const express = require("express");
const mongoose = require("mongoose");
const routers = require("./src/routes/index");
const cors = require("cors");
const Category = require('./src/models/Category');
const categories = require('./src/utils/mockUps/categoriesConObjectId.json');
const Review = require("./src/models/Review");
const reviews = require('./src/utils/mockUps/reviewsConObjectId.json');
const User = require('./src/models/User');
const users = require('./src/utils/mockUps/usersConObjectId.json');
const Order = require("./src/models/Order");
const orders = require ('./src/utils/mockUps/orderConObjectId.json');
const Course = require("./src/models/Course");
const courses = require('./src/utils/mockUps/coursesConObjectId.json')
const morgan = require("morgan");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

//Crea el servidor
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

//Morgan
app.use(morgan(':method :status :url'))

//Habilitar el parseo de los datos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Rutas de la server
app.use("/", routers);

// DB Config
const db = process.env.MONGO_URI;
const port = process.env.PORT || 7070;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongo DB connected!"))
  .catch((error) => console.log(error));

app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
  // const data = await Category.insertMany(categories)
  // console.log(data,"q me devuelve")
  // const data2 = await User.insertMany(users)
  // console.log(data,"q me devuelve")
  //  const data3 = await Review.insertMany(reviews)
  // console.log(data,"q me devuelve")
  //  const data4 = await Order.insertMany(orders)
  // console.log(data,"q me devuelve")
  //  const data5 = await Course.insertMany(courses)
  // console.log(data,"q me devuelve")


});
