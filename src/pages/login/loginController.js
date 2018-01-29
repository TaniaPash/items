angular.module('rechi')
    .controller('LoginController', ['$scope', '$http', '$state', 'AuthenticationService', '$window', "$translate", function ($scope, $http, $state, AuthenticationService, $window, $translate) {
        var $ctrl = this;
        $ctrl.user = {
            email: "",
            password: ""
        };
        $ctrl.error = AuthenticationService.error;
        $ctrl.submit = function () {
            AuthenticationService.checkLog($ctrl.user)
                .catch(function (error) {
                    console.log("Error during authentication", error);
                    $ctrl.error = "Email or password is incorrect";
                });
        };

        $ctrl.newUser = {
            email: "",
            password: "",
            name: ""
        };
        $ctrl.saveNewUser = function (newUser) {
            $http.post('https://rechi.herokuapp.com/users', $ctrl.newUser)
                .then(function successCallback(response) {
                    $state.go('list');
                }, function errorCallback(response) { console.log("Error during POST /users", response) });
        }
    }]);
