const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");

router.post("/add/candidate", (req, res) => {
  const candidate = new Candidate(req.body);
  candidate.save(err => {
    if (err) {
      return console.log(err);
    }
    console.log("Candidate create successfully!");
    res.status(200);
  });
});

router.get("/candidate/:id", async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    res.status(200).json(candidate);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
