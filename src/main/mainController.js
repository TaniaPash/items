angular.module('rechi')
  .controller("MainController", MainController)
  /*@ngInject*/
  function MainController ($scope, $translate, constant, $http) {
    var $ctrl = this;
    $ctrl.backgroundImage = constant.backgroundImage;
    $ctrl.changeLanguage = function (lang) {
      $translate.use(lang);
    }
    $ctrl.logOut = function () {
      sessionStorage.clear()
    };
  };