angular.module('rechi')
  .controller("MainController", ["$scope", "$translate", "constant", "$http", function ($scope, $translate, constant, $http) {
    var $ctrl = this;

    $ctrl.backgroundImage = constant.backgroundImage;
    
    console.log($ctrl.backgroundImage);

    $ctrl.changeLanguage = function (lang) {
      $translate.use(lang);
    }
    $ctrl.logOut = function () {
      sessionStorage.clear()
    };

  }]);