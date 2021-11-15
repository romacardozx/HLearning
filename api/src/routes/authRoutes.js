const { Router } = require('express');
const express = require('express');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const User  = require("../models/User");
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
  });
const { SECRET_KEY } = process.env;

const router = Router();
router.use(express.json());


router.post("/login", (req, res, next) => {
    passport.authenticate("local", async (err, user) => {
      if (err) throw err;
      if (!user) res.status(400).send("No User Exists");
      else {
        const token = await jwt.sign(
          {
            id: user._id,
            email: user.email,
            // isAdmin: user.isAdmin,
            // isDeleted: user.isDeleted,
          },
          SECRET_KEY,
          { expiresIn: "24hr" }
        );
          console.log("token", token)
        return res.status(200).json({
          id: user._id,
        //   isAdmin: user.isAdmin,
        //   isDeleted: user.isDeleted,
          token,
        });
      }
    })(req, res, next);
  });

  // Ruta para ver la información del usuario y la sesión
  router.get("/user", (req, res, next) => { 
    console.log("sesion", req.session)
    console.log("usuario", req.user)
  })

  // Deslogear al usuario
  router.get("/logout", (req, res, next) => {
    req.logOut();
    req.session = null;
    res.send(req.user);
  });


  // router.get("/profile", (req, res, next) => {
  //   console.log("hello")
  //   console.log(req.session);
  //   console.log(req.user);
  
  //   next();
  // });



module.exports = router;


