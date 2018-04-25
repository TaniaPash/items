angular.module('rechi')
	.controller('MainController', MainController);
/* @ngInject */
function MainController($scope, $translate, allConstants, $http) {
	const $main = this;
	$main.backgroundImage = allConstants.backgroundImage;
	$main.changeLanguage = function (lang) {
      $translate.use(lang);
	};
	$main.logOut = function () {
      sessionStorage.clear();
	};
}
