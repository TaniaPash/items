angular.module('rechi')
.controller('RegController', ['$scope', '$http', '$state', '$window',
    function ($scope, $http, $state, $window) {
        var $ctrl = this;
        
        $ctrl.newUser = {
            email: "",
            password: "",
            name: ""
        };
        

        $ctrl.saveNewUser = function (newUser) {
                  $http.post('https://rechi.herokuapp.com/users', $ctrl.newUser)
                .then(function successCallback(response) {
                    //   $ctrl.data.push(response.data); why I didm't need it ?
                    console.log(response, "New User was registrated");
                }, function errorCallback(response) { console.log("ErrorNewUser", response) });
        }
    }]);