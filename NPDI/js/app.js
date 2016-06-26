var app = angular.module('clock', []);

app.controller('clockController', function($scope, $interval){
  $scope.currentTime = new Date().toLocaleTimeString();
  $interval(theTime($scope), 1000);
});

function theTime($scope){
  $scope.currentTime = new Date().toLocaleTimeString();
}
