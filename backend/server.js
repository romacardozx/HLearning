const express = require('express');
const mongoose = require('mongoose');
const api = require('./api/index')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
  });

const app = express();

// DB Config
const db = process.env.MONGO_URI;
const port = 7070;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("Mongo DB connected!"))
    .catch(error => console.log(error))

// Use Routes
app.use('/api', api);

app.listen(port, () => console.log(`Server is running on port ${port}`) )