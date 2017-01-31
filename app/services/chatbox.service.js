(function () {
  'use strict';
  angular.module('yapp').factory('dataService', dataService);
  function dataService($http) {
    return {

      getdata: function () {
        console.log("in get service");
        return $http.get("https://reqres.in/api/users?page=1");
      },

      postdata: function () {
        console.log("in post service");
        var dataObj = {
          "email": "sydney@fife",
          "password": "pistol"
        };
        return $http.post("https://reqres.in/api/register", dataObj);
      },

      formPostData: function (dataObj) {
        console.log("in post service");
        console.log(dataObj);

        return $http.post("https://reqres.in/api/users", dataObj);
      }


    }
  }
}());
