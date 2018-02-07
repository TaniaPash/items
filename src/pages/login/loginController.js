angular.module('rechi')
    .controller('LoginController', LoginController)
    /*@ngInject*/
    function LoginController($scope, $http, $state, AuthenticationService, $window, $translate) {
       
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
        
    };
