angular.module('rechi')
    .config(function ($stateProvider) {
        var logIn = {
            name: 'logIn',
            url: '/login',
            templateUrl: 'pages/login/login.html',
            controller: 'LoginController',
            controllerAs: '$ctrl'
        }

        var list = {
            name: 'list',
            url: '/list',
            templateUrl: 'pages/list/list.html',
            controller: 'ListController',
            controllerAs: '$ctrl'
        }

        var registration = {
            name: 'registration',
            url: '/reg',
            templateUrl: 'pages/registration/registration.html',
            controller: 'RegController',
            controllerAs: '$ctrl'
        }

        $stateProvider.state(logIn);
        $stateProvider.state(list);
        $stateProvider.state(registration)


    });