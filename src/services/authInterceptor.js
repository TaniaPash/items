angular.module('rechi')
    .factory('authInterceptor', authInterceptor)
    
    /*@ngInject*/
    function authInterceptor ($rootScope, $q, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token && config.url.indexOf('cloudinary') === -1) 
                 {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                }
                return response || $q.when(response);
            }
        };
    };