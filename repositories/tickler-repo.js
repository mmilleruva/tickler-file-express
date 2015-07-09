var Tickler = require('../models/Tickler');

var create = function(ticklerData, cb){
  var tickler = new Tickler({
      userId: ticklerData.userId,
      desc: ticklerData.desc,
      cat: ticklerData.cat,
      details: ticklerData.details
    });

  tickler.save(function(err){
    if (err) {
      return cb(err);
    }
    return cb(null, tickler);
  });
};

var findByUserId = function(userId, cb){
  Tickler.find({userId: userId}, function(err, ticklers){
    if(err){
      return cb(err);
    }
    return cb(null, ticklers);
  });
};

module.exports = {
  create: create,
  findByUserId: findByUserId
};
