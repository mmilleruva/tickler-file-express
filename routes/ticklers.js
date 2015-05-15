var express = require('express');
var router = express.Router();
var ticklerRepo = require('../repositories/tickler-repo');
var ticklerService = require('../services/tickler-service');
var requireLogin = require('../middleware/require-login');


router.get('/', requireLogin, function(req, res, next){
  ticklerRepo.findByUserId(req.user._id, function(err, ticklers){
    if (err) {
      console.log(err);
    }
    console.log(ticklers)
    res.render('ticklers', {ticklers: ticklers});
  });
});

router.get('/:category', requireLogin, function(req, res, next){
  ticklerService.getUserTicklersByCategory(req.user._id, function(err, ticklerGroups){
    if (err) {
    }
    res.render('ticklers-for-category', {
      ticklerGroups: ticklerGroups,
      ticklers: ticklerGroups[req.params.category]});
  });
});

router.get('/create',
requireLogin,
function(req, res, next){
  res.render('ticklers-create');
});

router.post('/create',
requireLogin,
function(req, res, next){

  var tickler = {
    desc: req.body.desc,
    cat: req.body.cat,
    userId: req.user._id
  };
  ticklerRepo.create(tickler, function(err){
    if (err) {
      console.log(err);
    }
    res.redirect('/ticklers');
  });

});

module.exports = router;
