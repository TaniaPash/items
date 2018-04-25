angular.module('rechi')
	.service('GetItemService', GetItemService);
/* @ngInject */
function GetItemService($http, allConstants) {
	this.getItems = function () {
		return $http.get(allConstants.apiHostUrl + '/items', {});
	};
	this.addItem = function (newItem) {
		return $http.post(allConstants.apiHostUrl + '/items', newItem);
	};
}

// Fg
