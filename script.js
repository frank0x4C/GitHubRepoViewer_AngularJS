// Fahad Habeeb, October 2017 Practise
// Credit: Scott Allen (Plural Sight)
// The Function below fetches repository information from gitHub for a user

(function() {


  var app = angular.module("githubViewer", []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
    };

    var onError = function(reason) {
      $scope.error = "User data could not be found";
    };

// ng controllers can use services like https to grab data from web server
//$https methods returns a promise object, we grab a reult in future by using then method 
    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };
    
    $scope.username = "enter username to search"; //initilize username inside $scope
    $scope.message1 = "GitHub User Viewer"; //default messahe
    $scope.message2 = "Welcom to Git Hub Viewer Application in AngularJS. From tutorial by K. Scott Allen on Plural Sight";
    $scope.repoSortOrder = 'stargazers-count';
    $scope.userDetails = "userDetails.html";
  };

// calling the controller 
  app.controller("MainController", ["$scope", "$http", MainController]);

}()); 
//COntroller live inside a module to avoid global scope, so we use iffy
//prononced iify or (IIFE) immediately invoked function expression
//this syntex, invoke itself (func..()); since JS does not like anonymous functions
