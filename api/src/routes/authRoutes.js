const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Course = require("../models/Course");
const Review = require("../models/Review");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const router = Router();
router.use(express.json());

router.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(400).send("User or password incorrect!!");
    } else {
      const token = await jwt.sign(
        {
          id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        SECRET_KEY,
        { expiresIn: "24hr" }
      );
      return res.status(200).json({
        id: user._id,
        isAdmin: user.isAdmin,
        token,
      });
    }
  })(req, res, next);
});

//Ruta para pedir datos de un usuario logeado con seguridad bearer. Mandan el token y envia los datos del usuario dueño de ese token
router.get(
  "/user",
  passport.authenticate("bearer", { session: false }),
  async function (req, res) {
    try {
      let user = await User.findOne({
        _id: req.user.id,
      });
      await Course.populate(user, {path: "courses"});
      await Review.populate(user, {path: "reviews"});
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
);

// Deslogear al usuario
router.get("/logout", (req, res, next) => {
  req.logOut();
  req.session = null;
  res.send("Logged out");
});

router.post("/admin", async (req, res, next) => {
  const {token} = req.body;
  try {
    let email = jwt.verify(token, SECRET_KEY).email.toLowerCase();
    const isAdmin = await User.findOne({
      email: email, 
      isAdmin: true,
      status: "Confirmed"
    })
    if(isAdmin){
      res.status(200).json(true);
    } else {
      res.status(401).json(false)
    }
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router;
