var express       = require('express');
var router        = express.Router();
var ticklerService = require('../services/tickler-service');
var requireLogin  = require('../middleware/require-login');
var ticklerViewModel = require('../view-models/ticklerViewModel');

router.get('/', requireLogin, function(req, res){
  ticklerService.findByUserId(req.user._id, function(err, ticklers){
    if (err) {
      console.log(err);
    }
    var viewModel = ticklerViewModel.create(ticklers);
    viewModel.user = req.user;
    res.render('ticklers', viewModel);
  });
});

router.get('/create', requireLogin, function(req, res){
  res.render('ticklers-create');
});

router.post('/create', requireLogin, function(req, res){
  console.log(req.body)
  var tickler = {
    desc: req.body.desc,
    cat: req.body.cat,
    details: req.body.details,
    userId: req.user._id
  };

  if (!tickler.desc || !tickler.cat || !tickler.userId) {
    return res.render('error',{error: new Error("Data missing")} );
  };

  ticklerService.create(tickler, function(err){
    if (err) {
      console.log(err);
    }
    res.redirect('/ticklers');
  });

});

router.get('/:category', requireLogin, function(req, res){
  ticklerService.findByUserId(req.user._id, function(err, ticklers){
    if (err) {
      console.log(err);
    }

    var viewModel = ticklerViewModel.create(ticklers, req.params.category);
    viewModel.user = req.user;
    res.render('ticklers', viewModel);
  });
});

module.exports = router;
