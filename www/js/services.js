angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff', file: '001.zip', website: 'http://www.google.com' },
    { id: 1, name: 'G.I. Joe', file: '002.zip', website: 'http://www.imdb.com'  },
    { id: 2, name: 'Miss Frizzle', file: '003.zip', website: 'http://www.github.com' },
    { id: 3, name: 'Ash Ketchum', file: '004.zip', website: 'http://www.ionicframework.com' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
