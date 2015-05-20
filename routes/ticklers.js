var express       = require('express');
var router        = express.Router();
var ticklerRepo   = require('../repositories/tickler-repo');
var requireLogin  = require('../middleware/require-login');
var ticklerViewModel = require('../view-models/ticklerViewModel');

router.get('/', requireLogin, function(req, res, next){
  ticklerRepo.findByUserId(req.user._id, function(err, ticklers){
    if (err) {
    }
    var viewModel = ticklerViewModel.create(ticklers);
    res.render('ticklers', viewModel);
  });
});

router.get('/:category', requireLogin, function(req, res, next){
  ticklerRepo.findByUserId(req.user._id, function(err, ticklers){
    if (err) {
    }

    var viewModel = ticklerViewModel.create(ticklers, req.params.category);
    res.render('ticklers-for-category', viewModel);
  });
});

router.get('/create', requireLogin, function(req, res, next){
  res.render('ticklers-create');
});

router.post('/create', requireLogin, function(req, res, next){

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
