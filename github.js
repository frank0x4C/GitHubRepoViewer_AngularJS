<<<<<<< HEAD
(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });

    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
      .then(function(response) {
        return response.data;
      });

    };

    return {
      getUser: getUser,
      getRepos: getRepos

    };
  };

  var module = angular.module("githubViewer");
  module.factory("github", github);

=======
(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });

    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
      .then(function(response) {
        return response.data;
      });

    };

    return {
      getUser: getUser,
      getRepos: getRepos

    };
  };

  var module = angular.module("githubViewer");
  module.factory("github", github);

>>>>>>> 4f8ec7b95b9e1af443851c8228d551f1d38f758d
}());