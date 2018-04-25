angular.module('rechi')
	.controller('ModalChangeItemController', ModalChangeItemController);

/* @ngInject */

function ModalChangeItemController($http, itemCopy, $uibModal, $uibModalInstance, allConstants) {
	const $ctrl = this;

	$ctrl.item = itemCopy;

	$ctrl.save = function (item) {
        $http.put(allConstants.apiHostUrl + '/items/' + $ctrl.item.id, $ctrl.item)
        	.then(response => {
                $uibModalInstance.close(response);
        	}, response => {
 console.log('Error during PUT /Item', response);
        	});
	};

	$ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
	};
}
