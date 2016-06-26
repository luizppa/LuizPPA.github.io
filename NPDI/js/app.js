var app = angular.module('clock', []);

app.controller('clockController', function($scope, $interval){
  $scope.currentTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.currentTime = new Date().toLocaleTimeString();
  }, 1000);
});
