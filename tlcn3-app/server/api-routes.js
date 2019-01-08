const express = require('express');
const router = express.Router();
const checkAuth = require('./check-auth');
const multer = require('multer');

const Resume = require('./models/resumeModel');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }

});

//API add picture to server and return imagePath
router.post('/add/picture', multer({
  storage: storage
}).single("image"), async (req, res) => {
  const url = req.protocol + '://' + req.get("host");
  let imagePath = url + "/images/" + req.file.filename;
  res.status(200).json({
    avatarUrl: imagePath
  })
});

//API create user
router.post('/add/user', async (req, res) => {
  const resume = new Resume(req.body);
  await resume.save();
  res.redirect('/user/all');
});

//API get all users
router.get('/user/all', async (req, res) => {
  const resume = await Resume.find();
  res.send(resume);
});

//API get user by ID
router.get('/user/:id', checkAuth, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.status(200).json(resume);

  } catch (err) {
    res.status(404).send(err);
  }
});

//API delete user by ID
router.delete('/delete/user/:id', async (req, res) => {
  try {
    await Resume.remove({
      _id: req.params.id
    });
    res.status(200).json({
      message: "Delete user successfully!"
    });

  } catch (err) {
    res.status(404).send(err);
  }
});

//API update user by ID
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
    res.status(500).json({
      message: "Update failed!"
    });
  }
});

module.exports = router;
