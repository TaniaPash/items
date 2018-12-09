angular.module('rechi')
	.controller('RegController', RegController);

function RegController($scope, $http, $state, $window, allConstants) {
	const $ctrl = this;
	$ctrl.newUser = {
		email: '',
		password: '',
		name: ''
	};
	$ctrl.saveNewUser = function (newUser) {
                $http.post(allConstants.apiHostUrl + '/auth/signup', $ctrl.newUser)
                	.then(response => {
                        $state.go('logIn');
                	}, response => {
 console.log('Error during POST /users', response);
                	});
	};
}
