var express = require("express");
const passport = require("passport");
const { Router } = require("express");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
var LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
  });
const { SECRET_KEY } = process.env;

const router = Router();
router.use(express.json());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    async (email, password, done) => {
        const user = await User.findOne({ email: email });

      if (!user) return done(null, false);
      if (!bcrypt.compare(password, user.password)) {
          console.log("las contraseñas no coinciden")
        return done(null, false);
      }
      console.log("autentica usuario", user)
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
    console.log("entra al serialize") // No está sucediendo
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
    console.log("entra al deserialize") // Tampoco está sucediendo
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      email: user.email,
    };
    done(err, userInformation);
  });
});