angular.module('rechi')
	.controller('LoginController', LoginController);
/* @ngInject */
function LoginController($scope, $http, $state, AuthenticationService, $window, $translate) {
	const $ctrl = this;
	$ctrl.user = {
		email: '',
		password: ''
	};
	$ctrl.error = AuthenticationService.error;
	$ctrl.submit = function () {
            AuthenticationService.checkLog($ctrl.user)
            	.catch(error => {
                    console.log('Error during authentication', error);
                    $ctrl.error = 'Email or password is incorrect';
            	});
	};
}
