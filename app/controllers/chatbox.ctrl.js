'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description # MainCtrl Controller of cbapp
 */
angular
  .module('yapp')
  .controller(
    'ChatCtrl', ['$scope', 'dataService', ChatCtrl]);

function ChatCtrl($scope, dataService) {
  $scope.chatlog = "";

/*
  $scope.$state = $state;
*/


  /*
   ----------------------------------------------------------
   */
  $scope.sendUserChatInput = function () {
    console.log("in function ",$scope.userInput );


    var dataObj = {
      "userId": $scope.dashuser,
      "userInput":$scope.userInput
    };


    dataService.formPostData(dataObj).then(function (response) {
      console.log("in get controller");
      $scope.requestOutput = response.data;

      $scope.botOutput = response.data.id;

      console.log(response.data)
      console.log("id ==== ", response.data.id);

/*
      -----------------------------------
*/
      var elem = document.getElementById("demochat");
      if (elem) {
        elem.parentNode.removeChild(elem);
      }

      document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
        + "<br>"
        + $scope.userInput
      $scope.chatlog = $scope.chatlog + "\n\r "
        + $scope.userInput;



        document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
          + "<br>"
          + "<b>ChatBot:</b>" + $scope.botOutput;
        $scope.chatlog = $scope.chatlog + "\n "
          + "<b>ChatBot:</b>" + $scope.botOutput;







    });
  };


  /*
   ----------------------------------------------------------
   */


  $scope.sendInput = function () {

    var elem = document.getElementById("demochat");
    if (elem) {
      elem.parentNode.removeChild(elem);
    }
    // console.log("aa===", $scope.userInput)
    // console.log("log===", $scope.chatlog)

    document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
      + "<br>"
      + $scope.userInput
    $scope.chatlog = $scope.chatlog + "\n\r "
      + $scope.userInput;

    if (!$scope.userInput) {

      document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
        + "<br>"
        + "<b>ChatBot:</b> You did not enter anything!"
      $scope.chatlog = $scope.chatlog + "\n "
        + "<b>ChatBot:</b> You did not enter anything!";

    }
    else if ($scope.userInput == 'hi') {

      document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
        + "<br>"
        + "<b>ChatBot:</b> Howdy!"
      $scope.chatlog = $scope.chatlog + "\n "
        + "<b>ChatBot:</b> Howdy!";

    } else if ($scope.userInput == 'name') {

      document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
        + "<br>"
        + "<b>ChatBot:</b> My name is Chatbot"
      $scope.chatlog = $scope.chatlog
        + "\n " + "<b>ChatBot:</b> My name is Chatbot";

    } else {

      document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
        + "<br>"
        + "<b>ChatBot:</b> I'm confused"
      $scope.chatlog = $scope.chatlog
        + "\n " + "<b>ChatBot:</b> I'm confused";

    }

    $scope.userInput = "";

  }


}
