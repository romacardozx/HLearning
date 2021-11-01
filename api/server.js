const express = require("express");
const mongoose = require("mongoose");
const routers = require("./src/routes/index");
const cors = require('cors');


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

//Crea el servidor
const app = express();

// Cors
app.use(cors({
  origin: "http://localhost:3000"
}));

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

app.listen(port, () => console.log(`Server is running on port ${port}`));
