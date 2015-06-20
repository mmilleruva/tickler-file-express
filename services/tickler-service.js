var ticklerRepo = require('../repositories/tickler-repo');

var findByUserId = function(userId, cb){
  ticklerRepo.findByUserId(userId, function(err, ticklers){
    if(err){
      return cb(err);
    }
    return cb(null,ticklers);
  });
};

var create = function(tickler, cb){
  ticklerRepo.create(tickler, function(err){
    cb(err);
  });
};

module.exports = {
  findByUserId: findByUserId,
  create:       create
};
