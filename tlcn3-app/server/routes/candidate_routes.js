const express = require('express');
const router = express.Router();
// const Candidate = require('./models/Candidate');

router.post('/add/candidate', (req, res) => {
  const candidate = new Candidate(req.body);
  candidate.save(err=>{
    if (err){
      return console.log(err);
    }
    console.log("Candidate create successfully!");
    console.log(res.json);
  });
  
});

module.exports = router;
