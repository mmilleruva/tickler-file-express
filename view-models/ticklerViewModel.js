var _ = require('underscore');
var ticklerCategories = require('../models/Categories');

var getUserTicklersByCategory = function(ticklers){
  return _.groupBy(ticklers, function(tickler){
    return tickler.cat;
  });
};

var createCategories = function(ticklerGroups, selectedCategory){
  return _.map(ticklerCategories.values, function(category){
    var categoryModel = {
      displayName: category.displayName,
      id: category.id,
      active: category.id == selectedCategory
    }

    if (ticklerGroups[category.id]) {
      categoryModel.count = ticklerGroups[category.id].length;
    };
    return categoryModel;
  });
}

var create = function(ticklersForUser, category){
  var ticklerGroups = getUserTicklersByCategory(ticklersForUser);
  var result = {
    ticklerGroups: ticklerGroups,
    ticklers: ticklersForUser,
    categories: createCategories(ticklerGroups, category),
    category: "All Ticklers"
  };

  if (category) {
    result.ticklers = ticklerGroups[category] || [];
    result.category = category
  }

  return result;
};

module.exports = {
  create: create
};
