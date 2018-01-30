angular.module('rechi')
  .controller("MainController", MainController)
  /*@ngInject*/
  function MainController ($scope, $translate, allConstants, $http) {
    var $ctrl = this;
    $ctrl.backgroundImage = allConstants.backgroundImage;
    console.log($ctrl.backgroundImage);
    $ctrl.changeLanguage = function (lang) {
      $translate.use(lang);
    }
    $ctrl.logOut = function () {
      sessionStorage.clear()
    };
  };