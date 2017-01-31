'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {
    	localStorage.setItem("loggeduser", $scope.loggeduser);
    
      $location.path('/dashboard');

      return false;
    }

  });
