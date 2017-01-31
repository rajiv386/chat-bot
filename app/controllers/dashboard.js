'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

$scope.dashuser = localStorage.getItem("loggeduser");
/*console.log("User-------", $scope.dashuser);*/
    $scope.$state = $state;

  });
