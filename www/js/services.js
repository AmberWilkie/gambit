angular.module('gambit.services', ['ionic', 'ngStorage'])

// create a new factory
  .factory ('StorageService', function ($localStorage) {

    $localStorage = $localStorage.$default({
      highScore: 0,
      totalActivities: 0,
      totalIndulgences: 0
    });

    var _showHighScore = function () {
    return $localStorage.highScore;
    };

    // var _setHighScore = function(newValue) {
    //   $localStorage.highScore = newValue;
    // };

    var _totalActivities = function () {
      return $localStorage.totalActivities;
    };

    var _totalIndulgences = function () {
      return $localStorage.totalIndulgences;
    };
    return {
      highScore: _showHighScore(),
      totalActivities: _totalActivities(),
      totalIndulgences: _totalIndulgences(),
      // setHighScore: _setHighScore()
    }
  });
