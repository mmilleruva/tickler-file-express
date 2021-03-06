var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/User');
var ticklerService = require('../services/tickler-service');
var requireLogin = require('../middleware/require-login');

/* GET home page. */
router.get('/', requireLogin, function(req, res) {
  ticklerService.getUserTicklersByCategory(req.user._id, function(err, ticklerGroups){
    if (err) {
      return console.log(err);
    }
    res.render('index', {
      title: 'Ticklers',
      user: req.user,
      ticklerGroups: ticklerGroups
    });
  });
});

router.get('/signup', function(req, res){
  res.render('signup');
});

router.post('/signup', function(req, res, next){
  var user = new User({username: req.body.username});
  User.register(user, req.body.password, function(err, user){
      passport.authenticate('local')(req, res, function(){
        res.redirect('/ticklers');
      });
  });
});

router.get('/login', function(req, res){
  res.render('login');
});

router.post('/login', passport.authenticate('local'), function(req, res){
  res.redirect('/ticklers');
});

module.exports = router;
