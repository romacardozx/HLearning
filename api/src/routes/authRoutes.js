const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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
        "miclavesecreta",
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

module.exports = router;
