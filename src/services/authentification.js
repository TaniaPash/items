angular.module('rechi')
    .service('AuthenticationService', function ($http, $state) {
        this.checkLog = function (user) {
            $http.post('https://rechi.herokuapp.com/auth', user)
            .then(function (response) {
                $state.go('list');
                console.log(response);
            }, function (response) { console.log("LoginError", response) })
        }
    });


