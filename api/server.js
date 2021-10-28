const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
  });

const app = express();

// DB Config
const db = process.env.MONGO_URI;
const port = process.env.PORT || 7070;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("Mongo DB connected!"))
    .catch(error => console.log(error))


app.listen(port, () => console.log(`Server is running on port ${port}`) )