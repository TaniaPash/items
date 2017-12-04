angular.module('rechi')
    .controller('LoginController', ['$scope','$http', '$state', 'AuthenticationService',
     function ($scope, $http, $state, AuthenticationService) {
        var $ctrl = this;
        $ctrl.user = {
            email: "",
            password: ""
        };

        $ctrl.submit = function () {
            AuthenticationService.checkLog($ctrl.user)
        }

    }]);
