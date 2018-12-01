const express = require('express');
const router = express.Router();
const Resume = require('./resumeModel');
const passport = require('passport');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    //Hash password by MD5 before creating a new User which had password to database
    bcrypt.hash(req.body.password, 10).then(hash => {
      req.body.password = hash;
      resume = new Resume(req.body);
      resume.save();

    }).then(res.status(201).json({
      message: 'User created'
    }));

  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
});

router.post("/login", (req, res, next) => {
});

//
//
//Google path
router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

router.get('/auth/google/callback', passport.authenticate('google'), function (req, res) {
  res.send("It's OK!");
});
module.exports = router;
