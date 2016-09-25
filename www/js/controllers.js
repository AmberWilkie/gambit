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
    }
  };

  $scope.plusActivity = function() {
    $scope.activities += 1;
    $localStorage.totalActivities = $scope.activities;
    $scope.tempHighScore = $scope.activities;
    if ($localStorage.highScore < $scope.tempHighScore) {
      $localStorage.highScore = $scope.tempHighScore;
    }
  };

  $scope.minusIndulgence = function() {
    $localStorage.highScore = 0;
    if($scope.indulgences > 0) {
      $scope.indulgences -= 1;
    } else {
      console.log($scope.activities);
      console.log($localStorage.highScore);
      debugger;
      if($scope.activities > $localStorage.highScore) {
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
