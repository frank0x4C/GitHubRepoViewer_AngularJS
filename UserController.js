// Fahad Habeeb, October 2017 Practise
// Credit: Scott Allen (Plural Sight)
// The Function below fetches repository information from gitHub for a user

(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "User data could not be found";
    };


    $scope.username = $routeParams.username;
    $scope.repoSortOrder = 'stargazers-count';
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  // calling the controller 
  app.controller("UserController", UserController);

}());