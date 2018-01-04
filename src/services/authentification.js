angular.module('rechi')
    .service('AuthenticationService', function ($http, $state, $window) {
        var error = {};
        this.checkLog = function (user) {
            return $http.post('https://rechi.herokuapp.com/auth', user)
                .then(function (response) {
                    $window.sessionStorage.token = response.data.token;
                    $state.go('list');
                    return response
                })
        }
    });




