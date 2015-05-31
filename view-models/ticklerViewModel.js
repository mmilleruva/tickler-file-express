var _ = require('underscore');
var ticklerCategories = require('../models/Categories');

var getUserTicklersByCategory = function(ticklers){
  return _.groupBy(ticklers, function(tickler){
      return tickler.cat;
    });
}

var create = function(ticklersForUser, category){
  var ticklerGroups = getUserTicklersByCategory(ticklersForUser);
  var result = {
    ticklerGroups: ticklerGroups,
    ticklers: ticklersForUser,
    categories: ticklerCategories.values,
    category: category
  };

  if (category) {
    result.ticklers = ticklerGroups[category];
  };

  return result
}

module.exports = {
  create: create
}
