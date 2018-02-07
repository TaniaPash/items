angular.module('rechi')
    .controller('ModalChangeItemController', ModalChangeItemController)

/*@ngInject*/

function ModalChangeItemController($http, itemCopy, $uibModal, $uibModalInstance, allConstants) {

    var $ctrl = this;

    $ctrl.item = itemCopy;

    $ctrl.save = function (item) {
        $http.put(allConstants.apiHostUrl + '/items/' + $ctrl.item.id, $ctrl.item)
            .then(function successCallback(response) {
                $uibModalInstance.close(response);
            }, function errorCallback(response) { console.log("Error during PUT /Item", response) })
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};