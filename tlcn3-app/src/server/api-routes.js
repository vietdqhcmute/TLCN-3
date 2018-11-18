const express = require('express');
const router = express.Router();
const Resume = require('./resumeModel');
const passport = require('passport');

router.post('/add/user', async (req, res) => {
  const resume = new Resume(req.body);
  await resume.save();
  res.redirect('/user/all');
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
      new: true
    });
    res.status(200).json({
      message: "Update successfully"
    });

  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/auth/facebook/callback', (req, res) => {
  res.send("This check status on request! That's good!");
});

router.get('/login/facebook', passport.authenticate('facebook', (err, user, info) => {
  console.log(err, user, info);
  if (err) {
    throw err;
  }

}));

module.exports = router;
