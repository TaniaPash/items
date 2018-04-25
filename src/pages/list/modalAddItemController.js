angular.module('rechi')
	.controller('ModalAddItemController', ModalAddItemController);
/* @ngInject */
function ModalAddItemController($http, Upload, $uibModal, GetItemService, $uibModalInstance) {
	const $ctrl = this;
	$ctrl.newItem = {
		name: ' ',
		description: ' ',
		imageUrl: ''
	};

	$ctrl.newImage = null;

	$ctrl.saveItem = function () {
            Upload.upload({
            	url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
            	data: {file: $ctrl.newImage, upload_preset: 'xi1quxpr'}
            }).then(response => {
            	$ctrl.newItem.imageUrl = response.data.secure_url;
                GetItemService.addItem($ctrl.newItem).then(response => {
                    $uibModalInstance.close(response.data);
                }, response => {
 console.log('Error during POST /items', response);
                });
            }, response => {
 console.log('Error during UPLOAD picture', response);
            });
	};

	$ctrl.cancelAddNewItem = function () {
            $uibModalInstance.dismiss('cancel');
	};
}
