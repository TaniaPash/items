angular.module('rechi')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })

    // Angular-translate
    .config(["$translateProvider", function ($translateProvider) {
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