angular.module('rechi')
	.factory('authInterceptor', authInterceptor);

/* @ngInject */
function authInterceptor($rootScope, $q, $window) {
	return {
		request(config) {
			config.headers = config.headers || {};
			if ($window.sessionStorage.token && config.url.indexOf('cloudinary') === -1) {
				config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}
			return config;
		},
		response(response) {
			if (response.status === 401) {
			}
			return response || $q.when(response);
		}
	};
}
