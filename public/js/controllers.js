'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function LoginCtrl() {

}


function RegisterCtrl() {

}

function RequestCtrl() {
}

function CircleCtrl() {
}

function HomeCtrl($timeout){
  $timeout(function(){
    $('.orbit-container').foundation('orbit');
  }, 100);
}
