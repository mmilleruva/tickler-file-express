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

  var tickler = {
    desc: req.body.desc,
    cat: req.body.cat,
    userId: req.user._id
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
