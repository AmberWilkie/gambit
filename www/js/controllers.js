angular.module('gambit.controllers', ['ngStorage'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};
  //
  // // Create the login modal that we will use later
  // // $ionicModal.fromTemplateUrl('templates/login.html', {
  // //   scope: $scope
  // // }).then(function(modal) {
  // //   $scope.modal = modal;
  // // });
  //
  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };
  //
  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };
  //
  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);
  //
  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('GameCtrl', function($scope, $localStorage) {
  $localStorage = $localStorage.$default({
    highScore: 0,
    totalActivities: 0,
    totalIndulgences: 0
  });

  $scope.indulgences = $localStorage.totalIndulgences;
  $scope.activities = $localStorage.totalActivities;
  $scope.highScore = $localStorage.highScore;

  $scope.minusActivity = function() {
    if($scope.activities > 0) {
      $scope.activities -= 1;
      $localStorage.totalActivities = $scope.activities;
    }
  };

  $scope.plusActivity = function() {
    $scope.activities += 1;
    $localStorage.totalActivities = $scope.activities;
    var rand = Math.floor(Math.random() * (5) + 1);
    if (rand == 1) {
      $localStorage.totalIndulgences += 1;
      $scope.indulgences = $localStorage.totalIndulgences;
    }
    if ($localStorage.highScore < $scope.activities) {
      $localStorage.highScore = $scope.activities;
      $scope.highScore = $localStorage.highScore;
    }
  };

  $scope.minusIndulgence = function() {
    // $localStorage.highScore = 0; // Use only for reset during testing
    // $localStorage.totalActivities = 0;
    // $localStorage.totalIndulgences = 0;
    if($scope.indulgences > 0) {
      $scope.indulgences -= 1;
      $localStorage.totalIndulgences = $scope.indulgences;
    } else {
      if($scope.activities == $localStorage.highScore) {
        $localStorage.highScore = $scope.activities;
        alert("You lose! New high score: " + $localStorage.highScore);
      } else {
        alert("You lose!")
      }
      $scope.activities = 0;
      $localStorage.totalActivities = 0;
    }
  };

  $scope.plusIndulgence = function() {
    $scope.indulgences += 1;
    $localStorage.totalIndulgences = $scope.indulgences;
  };
});
