angular.module('rechi')
  .controller('ListController', ListController)

/*@ngInject*/
function ListController
  ($http, Upload, $uibModal, GetItemService, usSpinnerService, allConstants) {

  var $ctrl = this;

  $ctrl.itemCopy = [];

  usSpinnerService.stop();

  GetItemService.getItems()
    .then(function successCallback(list) {
      $ctrl.data = list.data;
    }, function errorCallback(list) {
      console.log('Error during GET /items', list);
    });

  $ctrl.deleteItem = function (index) {
    $http.delete( allConstants.apiHostUrl + '/items/' + $ctrl.data[index].id)
      .then(function successCallback(response) {
        $ctrl.data.splice(index, 1);
      }, function errorCallback(response) { console.log("Error during Delete Item", response) })
  };

  // Modal window ADD ITEM
  $ctrl.open = function () {
    var modalInstance = $uibModal.open({
      size: 'md',
      templateUrl: "pages/list/addItemModal.html",
      controller: 'ModalAddItemController',
      controllerAs: '$ctrl'
    })

    modalInstance.result.then(function (item) {
      $ctrl.data.push(item);
    }).catch(function (error) {
    });
  };

  // Modal window CHANGE ITEM
  $ctrl.openChange = function (item, index) {
    var modalInstance = $uibModal.open({
      size: 'md',
      templateUrl: "pages/list/changeItemModal.html",
      controller: 'ModalChangeItemController',
      controllerAs: '$ctrl',
      resolve: {
        itemCopy: function () {
          return $ctrl.itemCopy[index] = angular.copy(item);
        }
      }
    })
    modalInstance.result.then(function (response) {
      $ctrl.data[index] = response.data;
    }).catch(function (error) {
    });
  };

  // Toggle list's style
  $ctrl.toggle = true;
  $ctrl.tog = function () {
    $ctrl.toggle = !$ctrl.toggle;
  }
}