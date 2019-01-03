const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var cookieSession = require('cookie-session');
var session = require('express-session');
var passport = require('passport');

const key = require('./key');
const Resume = require('./resumeModel');
const app = express();

var connectionString = 'mongodb://lytutronga6:lytutronga6@tlcn-1-shard-00-00-looeq.mongodb.net:27017,tlcn-1-shard-00-01-looeq.mongodb.net:27017,tlcn-1-shard-00-02-looeq.mongodb.net:27017/test?ssl=true&replicaSet=TLCN-1-shard-0&authSource=admin&retryWrites=true';

// connection to db
mongoose.connect(connectionString, {
    dbName: 'CV-db'
  })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./api-routes');
const authRoutes = require('./auth');
const adminRoutes = require('./admin-routes');
const statisticRoutes = require('./statistic-routes');
// settings
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/images",express.static(path.join("../server/images")));
// middlewares
app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}))
//Cookie
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
app.use(passport.initialize());
app.use(passport.session());

//Passport
passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser((id, done) => {
  Resume.findById(id)
    .then(user => {
      done(null, user);
    })
});
//Google
passport.use(new GoogleStrategy({
    clientID: key.googleClientID,
    clientSecret: key.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    Resume.findOne({ googleId: profile._json.id }, (err, user) => {
      if (err) {
        console.log(err);
        done(err);
      } else
      if (user) {
        console.log(user);
        done(null, user);
      } else {
        //If user haven't exist, create new one
        newUser = new Resume();
        newUser.googleId = profile._json.id;
        newUser.googleName = profile._json.displayName;
        newUser.avatarURL = profile._json.image.url;
        //save created user to database
        newUser.save(err => {
          if (err) {
            throw err;
          }
          return done(null, newUser);
        });
      }
    });
  }
));

//Morgan
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
//enable cross-origin resource sharing (CORS) 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});
// routes
app.use('/', indexRoutes);
app.use('/',authRoutes);
app.use('/',adminRoutes);
app.use('/',statisticRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
