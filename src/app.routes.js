angular.module('rechi')
	.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/login');

        const logIn = {
        	name: 'logIn',
        	url: '/login',
        	templateUrl: 'pages/login/login.html',
        	controller: 'LoginController',
        	controllerAs: '$ctrl'
        };
        const list = {
        	name: 'list',
        	url: '/list',
        	templateUrl: 'pages/list/list.html',
        	resolve: {
        		list(GetItemService) {
        			return GetItemService.getItems();
        		},
        		startSpin(usSpinnerService) {
                    usSpinnerService.spin();
        		}
        	},

        	controller: 'ListController',
        	controllerAs: '$ctrl'
        };
        const registration = {
        	name: 'registration',
        	url: '/reg',
        	templateUrl: 'pages/registration/registration.html',
        	controller: 'RegController',
        	controllerAs: '$ctrl'
        };
        $stateProvider.state(logIn);
        $stateProvider.state(list);
        $stateProvider.state(registration);
	});
