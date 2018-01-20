angular.module('rechi')
  .controller('ListController', ['$http', 'Upload', '$uibModal', 'GetItemService','usSpinnerService', function
   ($http, Upload, $uibModal, GetItemService, usSpinnerService) {

    var $ctrl = this;
  
    $ctrl.itemCopy = [];
    usSpinnerService.spin();
    GetItemService.getItems()
      .then(function successCallback(list) {
        $ctrl.data = list.data
      }, function errorCallback(list) {
        console.log('Error during GET /items', list);
      });
    console.log('List Controller', $ctrl);

    $ctrl.deleteItem = function (index) {
      $http.delete('https://rechi.herokuapp.com/items/' + $ctrl.data[index].id)
        .then(function successCallback(response) {
          $ctrl.data.splice(index, 1);
          console.log("Item was deleted!")
        }, function errorCallback(response) { console.log("Error3: Item was not deleted!", response) })
    };

    $ctrl.saveUpdatedItem = function (index) {
      $http.put('https://rechi.herokuapp.com/items/' + $ctrl.data[index].id, $ctrl.data[index])
        .then(function successCallback(response) {
          console.log("Item was udated!");
        }, function errorCallback(response) { console.log("Error4", response) })
    };

$ctrl.catch = function (){

};


    $ctrl.edit = function (item, index) {
      $ctrl.itemCopy[index] = angular.copy(item);
      console.log($ctrl.itemCopy[index])
    }

    $ctrl.cancel = function (index) {
      $ctrl.data[index] = $ctrl.itemCopy[index];
      console.log("the changes were Canceled!", $ctrl.data[index], $ctrl.itemCopy[index]);
    }

    $ctrl.uploadTest = function (file) {
      Upload.upload({
        url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
        data: { file: file, upload_preset: 'xi1quxpr' }
      }).then(function successCallback(response) {
        console.log(response);
        console.log("OK!")
      }, function errorCallback(response) { console.log("Error88", response) })
    }

    // Modal window
    $ctrl.open = function () {
      var modalInstance = $uibModal.open({
        size: 'lg',
        templateUrl: "pages/list/addItemModal.html",
        resolve: {
          list: function (GetItemService) {
              return GetItemService.getItems();
          }
      },
        controller: 'ModalAddItemController',
        controllerAs: '$ctrl'
      })

      

      modalInstance.result.then(function(item){
        console.log('Result 111', item)
        $ctrl.data.push(item);
      }).catch(function (error) {
        console.log("Failed!", error);
    });
    };
    $ctrl.toggle = true;
    $ctrl.tog = function () {
       $ctrl.toggle = !$ctrl.toggle;
      
      }
  
  }])

  