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
        const user = await User.findOne({ email: email , status:"Confirmed" }); // Agregue status o puede buscar usuarios borrados o baneados!!!
      //  console.log(user,"ACAAAAAAAA")
      if (!user) return done(null, false);
      // if (!await bcrypt.compare(password, user.password)) {
      //     console.log("las contraseñas no coinciden")        DEJARIA ENCRYPTAR SI SOBRE TIEMPO PARA NO MODFICAR MAS RUTAS
          
      //   return done(null, false);
      // }
      if (password !== user.password) {
        return done(null, false);
      }
      console.log("autentica usuario", user)
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
    console.log("entra al serialize") // No está sucediendo
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("entra al deserialize") // Tampoco está sucediendo
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      username: user.email,       //ACA ERA USERNAME, ASI LO VE PASSPORT PORQUE ASI ESTA DECLARADO ANTES
    };
    done(err, userInformation);
  });
});


const BearerStrategy = require("passport-http-bearer").Strategy;

passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, "miclavesecreta", function (err, usuario) {
      if (err) return done(err);
      return done(null, usuario ? usuario : false);
    });
  })
);
