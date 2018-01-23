angular.module('rechi')
    .factory('authInterceptor', function ($rootScope, $q, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token && config.url.indexOf('cloudinary') === -1) {
                    //   1. "token" && config.url.indexOf('cloudinary') === -1; 
                    //   2. true && config.url.indexOf('cloudinary') === -1;
                    //   3. true && "url".indexOf('cloudinary') === -1;
                    //   4. true && 4 === -1;
                    //   5. true && false;
                    //   6. false.

                    //   1. null && config.url.indexOf('cloudinary') === -1; 
                    //   2. false && config.url.indexOf('cloudinary') === -1.
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                }
                return response || $q.when(response);
            }
        };
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })

// Angular-translate
    .config(["$translateProvider",function($translateProvider){
        // $translateProvider.registerAvailableLanguageKeys(['Eng', 'Ukr'], {
        //     'en': 'Eng',
        //     'ru': 'Ukr'
        //     });
            $translateProvider.useStaticFilesLoader({
                prefix: '/vocabulary/vocabulary_',
                suffix: '.json'
            });

      $translateProvider.preferredLanguage('en');
    //   $translateProvider.useSanitizeValueStrategy('escape')
    }])

    // Background image
    // .config(function(){
    //     var BackgroundImage = "https://ae01.alicdn.com/kf/HTB1xCW.KVXXXXXFaXXXq6xXFXXXy/50mm-Rhodium-tone-Flat-Head-Pins-eye-pins-studs-beads-Needle-components-earring-Agulhas-crafts-Dangle.jpg"
    // })
    .constant('myBackgroundUrl', {
        myBackgroundUrl: "https://ae01.alicdn.com/kf/HTB1xCW.KVXXXXXFaXXXq6xXFXXXy/50mm-Rhodium-tone-Flat-Head-Pins-eye-pins-studs-beads-Needle-components-earring-Agulhas-crafts-Dangle.jpg",
        // ImgName: 'ascrum'
      });