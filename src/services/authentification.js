angular.module('rechi')
	.service('AuthenticationService', AuthenticationService);

/* @ngInject */

function AuthenticationService($http, $state, $window, allConstants) {
	this.checkLog = function (user) {
		return $http.post(allConstants.apiHostUrl + '/auth/signin', user)
			.then(response => {
				$window.sessionStorage.token = response.data.token;
                    $state.go('list');
                    return response;
			});
	};
}

