const express = require("express");
const router = express.Router();
const Candidate = require("./models/Candidate");
const Authentication = require("./models/Authentication");
const Recruiter = require("./models/Recruiter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//API sign up for candidate
router.post("/sign-up", async (req, res) => {
  //Hash the password of user first when get a request, after hashing, save it on database
  //Check email is unique
  hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  let authenticationParams = {
    email: req.body.email,
    password: hash,
    role: 1
  };
  let authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    let candidateParams = {
      full_name: req.body.name,
      display_name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      image_url: ""
    };
    candidate = new Candidate(candidateParams);
    candidate.save(function(error) {
      if (error) {
        res.status(500).json({
          message: "Some error has occured!"
        });
        return;
      }
      res.status(201).json({
        message: "Candidate has been created!"
      });
    });
  });
});

//API sign up for recruiter
router.post("/recruiter/sign-up", async (req, res) => {
  //Check email is unique
  hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  let authenticationParams = {
    email: req.body.email,
    password: hash,
    role: 2
  };
  let authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    let recruiterParams = {
      company_name: req.body.company_name,
      image_url: "",
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      website: req.body.website,
      employees: 0,
      overview: "Adding some overview",
      recruit_news: [],
      candidates_follow: []
    };
    recruiter = new Recruiter(recruiterParams);
    recruiter.save(function(error) {
      if (error) {
        res.status(500).json({
          message: "Some error has occured!"
        });
        return;
      }
      res.status(201).json({
        message: "Recruiter has been created!"
      });
    });
  });
});

//API login
router.post("/login", (req, res, next) => {
  let fetchedUser; //to store user after findOne and use all then() block beneath
  Candidate.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Email fault!"
        });
      }
      fetchedUser = user;
      //this promise will return the result (TRUE or FALSE) of comparing request.password and user.password on DB
      return bcrypt.compare(req.body.password, user.password); //Have to return here because I have code have to run afer this (Promise)
    })
    .then(result => {
      //result would be TRUE or FALSE of comparing hashed request.password  and user.password already hashing
      if (!result) {
        return res.status(401).json({
          message: "Check your password"
        });
      }
      //If right password, create Jason Web Token
      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id
        },
        "secret_that_should_be_longer",
        {
          expiresIn: "1h"
        }
      );
      res.status(200).json({
        token: token,
        id: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Failed",
        body: err
      });
    });
});

module.exports = router;
