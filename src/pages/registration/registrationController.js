angular.module('rechi')
    .controller('RegController', RegController)
    
        function RegController ($scope, $http, $state, $window, allConstants) {
            var $ctrl = this;
            $ctrl.newUser = {
                email: "",
                password: "",
                name: ""
            };
            $ctrl.saveNewUser = function (newUser) {
                $http.post (allConstants.apiHostUrl + '/users', $ctrl.newUser)
                    .then(function successCallback(response) {
                        $state.go('logIn');
                    }, function errorCallback(response) { console.log("Error during POST /users", response) });
            }
        };