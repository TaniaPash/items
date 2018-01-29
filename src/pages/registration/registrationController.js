angular.module('rechi')
    .controller('RegController', RegController)
    
        function RegController ($scope, $http, $state, $window) {
            var $ctrl = this;
            $ctrl.newUser = {
                email: "",
                password: "",
                name: ""
            };
            $ctrl.saveNewUser = function (newUser) {
                $http.post('https://rechi.herokuapp.com/users', $ctrl.newUser)
                    .then(function successCallback(response) {
                        $state.go('logIn');
                    }, function errorCallback(response) { console.log("Error during POST /users", response) });
            }
        };