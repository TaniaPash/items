angular.module('rechi')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })

    // Angular-translate
    .config(["$translateProvider", function ($translateProvider) {
        $translateProvider.registerAvailableLanguageKeys(['En', 'Uk'], {
            'en': 'En',
            'ru': 'Uk',
            '*': 'En'
            });
        $translateProvider.useStaticFilesLoader({
            prefix: '/vocabulary/vocabulary_',
            suffix: '.json'
        });
        
        $translateProvider.fallbackLanguage('en');
        $translateProvider.determinePreferredLanguage();
        $translateProvider.useSanitizeValueStrategy('escape')
    }])

    .constant('constant', {
        appName: 'Items',
        image:"https://ae01.alicdn.com/kf/HTB1xCW.KVXXXXXFaXXXq6xXFXXXy/50mm-Rhodium-tone-Flat-Head-Pins-eye-pins-studs-beads-Needle-components-earring-Agulhas-crafts-Dangle.jpg"
           });