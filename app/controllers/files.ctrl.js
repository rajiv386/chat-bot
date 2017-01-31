'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of cbapp
 */
angular.module('yapp').controller('FilesCtrl', FilesCtrl);
function FilesCtrl($scope, $state) {

	$scope.$state = $state;
	$scope.list_of_files = [ 'File1', 'File2', 'File3', 'File4' ];

}
