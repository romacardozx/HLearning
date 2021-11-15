const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
const { SECRET_KEY } = process.env;

const router = Router();
router.use(express.json());

router.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user) => {
    //Este método no me está generado el req.user automáticamente, y no comprendo porque
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
        "miclavesecreta",
        { expiresIn: "24hr" }
      );
      console.log("token", token);
      console.log("req.user", req.user);
      return res.status(200).json({
        id: user._id,
        isAdmin: user.isAdmin,
        token,
      });
    }
  })(req, res, next);
});

router.get(
  "/user",
  passport.authenticate("bearer", { session: false }),
  async function (req, res) {
    try {
      console.log(req.user.id);      
      let user = await User.findOne({
        _id: req.user.id,            
      });
      console.log(user, "usuario que encuentra");
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  }
);

// Deslogear al usuario
router.get("/logout", (req, res, next) => {
  req.logOut();
  req.session = null;
  res.send("Logged out");
});

// router.get("/profile", (req, res, next) => {
//   console.log("hello")
//   console.log(req.session);
//   console.log(req.user);

//   next();
// });

module.exports = router;
