angular.module('rechi')
	.controller('ListController', ListController);

/* @ngInject */
function ListController($http, Upload, $uibModal, GetItemService, usSpinnerService, allConstants) {
	const $ctrl = this;

	$ctrl.itemCopy = [];

  usSpinnerService.stop();

  GetItemService.getItems()
  	.then(list => {
  		$ctrl.data = list.data;
  	}, list => {
      console.log('Error during GET /items', list);
  	});

  $ctrl.deleteItem = function (index) {
    $http.delete(allConstants.apiHostUrl + '/items/' + $ctrl.data[index].id)
    	.then(response => {
        $ctrl.data.splice(index, 1);
    	}, response => {
 console.log('Error during Delete Item', response);
    	});
  };

  // Modal window ADD ITEM
  $ctrl.open = function () {
  	const modalInstance = $uibModal.open({
  		size: 'md',
  		templateUrl: 'pages/list/addItemModal.html',
  		controller: 'ModalAddItemController',
  		controllerAs: '$ctrl'
  	});
    modalInstance.result.then(item => {
      $ctrl.data.push(item);
    }).catch(error => {
    });
  };

  // Modal window CHANGE ITEM
  $ctrl.openChange = function (item, index) {
  	const modalInstance = $uibModal.open({
  		size: 'md',
  		templateUrl: 'pages/list/changeItemModal.html',
  		controller: 'ModalChangeItemController',
  		controllerAs: '$ctrl',
  		resolve: {
  			itemCopy() {
  				return $ctrl.itemCopy[index] = angular.copy(item);
  			}
  		}
  	});
    modalInstance.result.then(response => {
    	$ctrl.data[index] = response.data;
    }).catch(error => {
    });
  };

  // Toggle list's style
  $ctrl.toggle = true;
  $ctrl.tog = function () {
  	$ctrl.toggle = !$ctrl.toggle;
  };
}
