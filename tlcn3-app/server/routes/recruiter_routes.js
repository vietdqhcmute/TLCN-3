const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const RecruitPost = require("../models/RecruitPost");

//Adding
router.post("/add/recruiter", (req, res) => {
  const recruiter = new Recruiter(req.body);
  recruiter.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).redirect("/recruiter/" + data._id);
  });
});
//Getting by ID
router.get("/recruiter/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(404).send(err);
  }
});
//Updating by ID
router.put("/update/recruiter/:id", async (req, res) => {
  try {
    await Recruiter.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      req.body,
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );
    res.status(200).redirect("/recruiter/" + req.params.id);
  } catch (err) {
    res.status(500).json({
      message: "Update failed!"
    });
  }
});

router.post("/add/recruit-post", (req, res) => {
  const recruitpost = new RecruitPost(req.body);
  recruitpost.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200);
  });
});
router.get("/all/recruit-post",(req,res)=>{
  const post = RecruitPost.find(error, data=>{
    if (error){
      return console.log(error);
    }
    res.status(200).json(data);
  })
});
module.exports = router;
