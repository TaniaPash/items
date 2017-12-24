angular.module('rechi')
    .controller('LoginController', ['$scope','$http', '$state', 'AuthenticationService', '$window',
     function ($scope, $http, $state, AuthenticationService, $window) {
        var $ctrl = this;
        $ctrl.user = {
            email: "",
            password: ""
        };

        $ctrl.submit = function () {
            AuthenticationService.checkLog($ctrl.user)
        }

    }]);
