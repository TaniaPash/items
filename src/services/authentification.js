angular.module('rechi')
    .service('AuthenticationService', function ($http, $state, $window) {
        this.checkLog = function (user) {
            $http.post('https://rechi.herokuapp.com/auth', user)
                .then(function (response) {
                    $state.go('list');
                    $window.sessionStorage.token = response.data.token;
                    // add jwt token to auth header for all requests made by the $http service
                   // $http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.token;
                    console.log(response, "LoggedIn");
                }, function (response) {
                    console.log("LoginError", response)
                    delete $window.sessionStorage.token;
                    console.log('Error: Invalid user or password');
                })
        }
    });


