var _ = require('underscore');
var ticklerCategories = require('../models/Categories');

var getUserTicklersByCategory = function(ticklers){
  return _.groupBy(ticklers, function(tickler){
      return tickler.cat;
    });
}

var create = function(ticklersForUser, category){
  var ticklerGroups = getUserTicklersByCategory(ticklersForUser);

  return {
    ticklerGroups: ticklerGroups,
    ticklers: ticklerGroups[category],
    categories: ticklerCategories.values,
    category: category
  };
}

module.exports = {
  create: create
}
