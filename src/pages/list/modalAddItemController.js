angular.module('rechi')
    .controller('ModalAddItemController', ModalAddItemController)
    /*@ngInject*/
    function ModalAddItemController ($http, Upload, $uibModal, GetItemService, $uibModalInstance) {
    
        var $ctrl = this;
        $ctrl.newItem = {
            name: " ",
            description: " ",
            imageUrl: "",
        };

        $ctrl.newImage = null;

        $ctrl.saveItem = function () {
            Upload.upload({
                url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
                data: { file: $ctrl.newImage, upload_preset: 'xi1quxpr' }
            }).then(function successCallback(response) {
                $ctrl.newItem.imageUrl = response.data.secure_url;
                GetItemService.addItem($ctrl.newItem).then(function successCallback(response) {
                    $uibModalInstance.close(response.data);
                },function errorCallback(response) { console.log("Error during POST /items", response) })
            }, function errorCallback(response) { console.log("Error during UPLOAD picture", response) })
        };

        $ctrl.cancelAddNewItem = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };