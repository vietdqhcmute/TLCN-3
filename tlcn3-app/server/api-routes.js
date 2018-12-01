const express = require('express');
const router = express.Router();
const Resume = require('./resumeModel');
const passport = require('passport');
const bcrypt = require('bcrypt');
router.post('/add/user', async (req, res) => {
  const resume = new Resume(req.body);
  await resume.save();
  res.redirect('/user/all');
});

router.post('/signup', async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 10).then(hash => {
      req.body.password = hash;
      resume = new Resume(req.body);
      resume.save();
    }).then(res.status(201).json({
      message: 'User created',
      body: req.body
    }));

  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
});

router.get('/user/all', async (req, res) => {
  const resume = await Resume.find();
  res.send(resume);
});
router.get('/user/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.status(200).json(resume);

  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete('/delete/user/:id', async (req, res) => {
  try {
    await Resume.remove({
      _id: req.params.id
    });
    res.status(200).json({
      message: "Delete successfully"
    });

  } catch (err) {
    res.status(404).send(err);
  }
});

router.put('/update/user/:id', async (req, res) => {
  try {
    await Resume.findByIdAndUpdate({
      _id: req.params.id
    }, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true
    });
    res.status(200).json({
      message: "Update successfully"
    });

  } catch (err) {
    res.status(404).send(err);
  }
});

//Google path
router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

router.get('/auth/google/callback', passport.authenticate('google'), function (req, res) {
  res.send("It's OK!");
});

module.exports = router;
