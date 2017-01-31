'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of cbapp
 */
angular.module('yapp').controller('LogsCtrl', LogsCtrl);
function LogsCtrl($scope, $state) {

	$scope.$state = $state;
	$scope.list_of_logs = [ {
		time : '111',
		replies : 'aaa',
		username : 'user1'
	}, {
		time : '222',
		replies : 'bbb',
		username : 'user2'
	}, {
		time : '333',
		replies : 'ccc',
		username : 'user3'
	}, {
		time : '444',
		replies : 'ddd',
		username : 'user4'
	}, {
		time : '555',
		replies : 'eee',
		username : 'user5'
	},

	];

}
