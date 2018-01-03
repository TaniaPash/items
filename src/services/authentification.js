angular.module('rechi')
    .service('AuthenticationService', function ($http, $state, $window) {
    
        this.checkLog = function (user) {
             $http.post('https://rechi.herokuapp.com/auth', user)
                .then(function (response) {
                   $state.go('list');
                    $window.sessionStorage.token = response.data.token;
                    console.log(response, "LoggedIn");
                   
                }, function (response) {
                    console.log("LoginError", response);
                   
                    delete $window.sessionStorage.token;
                    console.log("error");
                })
        }
    });

// if I have 401 response error will be with text on display
// 




