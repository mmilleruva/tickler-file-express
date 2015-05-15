var _ = require('underscore');
var ticklerRepo = require('../repositories/tickler-repo');

var getUserTicklersByCategory = function(userId, cb){
  ticklerRepo.findByUserId(userId, function(err, ticklers){
    if(err){
      return cb(err);
    }
    var groupedTicklers = _.groupBy(ticklers, function(tickler){
      return tickler.cat;
    });

    return cb(null,groupedTicklers);
  });
}

module.exports = {
  getUserTicklersByCategory: getUserTicklersByCategory
}
