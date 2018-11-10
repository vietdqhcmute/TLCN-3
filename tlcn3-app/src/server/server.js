const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

var session = require('express-session');
var passport = require('passport');
var FacebookStategy = require('passport-facebook');

const app = express();

var connectionString = 'mongodb://lytutronga6:lytutronga6@tlcn-1-shard-00-00-looeq.mongodb.net:27017,tlcn-1-shard-00-01-looeq.mongodb.net:27017,tlcn-1-shard-00-02-looeq.mongodb.net:27017/test?ssl=true&replicaSet=TLCN-1-shard-0&authSource=admin&retryWrites=true';
// var connectionString = 'mongodb://lytutronga6:lytutronga6@ds147073.mlab.com:47073/cv-db';

// connection to db
mongoose.connect(connectionString, {
    dbName: 'CV-db'
  })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./api-routes');

// settings
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// middlewares
app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}))
//Passport
app.use(passport.initialize());
app.use(passport.session());

var FACEBOOK_APP_ID = '1386959521460047',
  FACEBOOK_APP_SECRET = '7d7217dfa3df7caa80dacd92c3b798c6';
var fbOpts = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}
var fbCallback = function (accessToken, refreshToken, profile, cb) {
  console.log(accessToken, refreshToken, profile);
}
passport.use(new FacebookStategy(fbOpts, fbCallback));

//Morgan
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
//enable cross-origin resource sharing (CORS) 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
