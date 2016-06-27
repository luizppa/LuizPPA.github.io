var app = angular.module('clock', []);

app.controller('clockController', function($scope, $interval){
  $scope.currentTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.currentTime = new Date().toLocaleTimeString();
  }, 1000);
});

function nextSlide(){
  $('.slider').slider('next');
}

function previousSlide(){
  $('.slider').slider('prev');
}

function pauseSlide(){
  $('.slider').slider('pause');
}

function startSlide(){
  $('.slider').slider('start');
}

function hideIndicator(){
  $('.slider').slider({indicators:false});
  $('.slider').slider('pause');
}
