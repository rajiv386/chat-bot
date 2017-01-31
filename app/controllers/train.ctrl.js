'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of cbapp
 */
angular.module('yapp').controller('TrainCtrl', TrainCtrl);
function TrainCtrl($scope, $state) {

	$scope.$state = $state;
	$scope.cnt = 1;
	$scope.modal={}
  $scope.choices = [{id: 'choice1'}];

  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
	// $scope.addnewresp = function() {
	// 	var parent = document.getElementById("AddResponseForm");
	// 	var sib = document.getElementById("addresp");
	// 	var child = document.createElement("input");
    // $scope.modal['input'+$scope.cnt] =''
	// 	child.setAttribute("ng-model",'input'+$scope.cnt);
	// 	$scope.cnt += 1;
    //
	// 	var _br1=document.createElement("br");
	// 	var _br2=document.createElement("br");
	// 	parent.appendChild(child);
	// 	parent.insertBefore(child, sib);
	// 	parent.appendChild(_br1);
	// 	parent.insertBefore(_br1, sib);
	// 	parent.appendChild(_br2);
	// 	parent.insertBefore(_br2, sib)
    //
    //
	// }
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };

	$scope.showAddResponseForm = function() {
		document.getElementById("AddResponseForm").style.visibility = "visible";
	}

	$scope.sendInput = function() {

		console.log($scope.inputtext);
	}


	$scope.sendNewResponses = function() {

		console.log($scope.choices);
		// for(var i=0; i<$scope.cnt;i++){
		//   if(i==0)
		// 	var a="inputresponse"+i
        //
		// 	console.log($scope[a],a);
		// }

	}


}
