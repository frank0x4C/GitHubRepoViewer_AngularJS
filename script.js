// Fahad Habeeb, October 2017 Practise
// Credit: Scott Allen (Plural Sight)
// The Function below fetches repository information from gitHub for a user

(function() {


  var app = angular.module("githubViewer", []);

  var MainController = function(
    $scope, github, $interval, $log, $anchorScroll, $location) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
      //$http.get($scope.user.repos_url)
        //.then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
      $location.hash("userDetails");
      $anchorScroll();
      
    };

    var onError = function(reason) {
      $scope.error = "User data could not be found";
    };
    
    var decrementCountdown = function(){
      
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
      
    };

// ng controllers can use services like https to grab data from web server
//$https methods returns a promise object, we grab a reult in future by using then method 
    $scope.search = function(username) {
      $log.info("Searching for " + username);
      github.getUser(username).then(onUserComplete, onError);
      //$http.get("https://api.github.com/users/" + username)
        //.then(onUserComplete, onError);
        if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdown=null;
        }
    };
    
    $scope.username = "enter username to search"; //initilize username inside $scope
    $scope.message1 = "GitHub User Viewer"; //default messahe
    $scope.message2 = "Welcom to Git Hub Viewer Application in AngularJS. From tutorial by K. Scott Allen on Plural Sight";
    $scope.repoSortOrder = 'stargazers-count';
    $scope.userDetails = "userDetails.html";
    $scope.countdown=8;
    startCountdown();
  };

// calling the controller 
  app.controller("MainController", MainController);

}()); 
//COntroller live inside a module to avoid global scope, so we use iffy
//prononced iify or (IIFE) immediately invoked function expression
//this syntex, invoke itself (func..()); since JS does not like anonymous functions
