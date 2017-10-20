// Fahad Habeeb, October 2017 Practise
// Credit: Scott Allen (Plural Sight)
// The Function below fetches repository information from gitHub for a user

(function() {


  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location) {


    var decrementCountdown = function() {

      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }

      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    $scope.countdown = 8;
    startCountdown();
  };

  // calling the controller 
  app.controller("MainController", MainController);

}());


