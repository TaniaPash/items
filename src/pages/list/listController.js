angular.module('rechi')
  .controller('ListController', ['$http', 'Upload', function ($http, Upload) {
    var $ctrl = this;
    $ctrl.newItem = {
      name: " ",
      description: " ",
      imageUrl: "",
    };
    $ctrl.newImage = null;
    $ctrl.itemCopy = [];
    $http.get('https://rechi.herokuapp.com/items', {
    })
      .then(function successCallback(response) {
        $ctrl.data = response.data;
      }, function errorCallback(response) {
        console.log('Error during GET /items', response);
      });

    console.log('List Controller', $ctrl);

    $ctrl.saveItem = function () {
      Upload.upload({
        url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
        data: { file: $ctrl.newImage, upload_preset: 'xi1quxpr' }
      }).then(function successCallback(response) {
        console.log(response);
        $ctrl.newItem.imageUrl = response.data.secure_url;
        $http.post('https://rechi.herokuapp.com/items', $ctrl.newItem)
          .then(function successCallback(response) {
            $ctrl.data.push(response.data);
            console.log(response);
          }, function errorCallback(response) { console.log("Error2", response) });
      }, function errorCallback(response) { console.log("ErrorCL", response) });
    };

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

    $ctrl.edit = function (item, index) {
      $ctrl.itemCopy[index] = angular.copy(item);
    }

    $ctrl.cancel = function (index) {
      $ctrl.data[index] = $ctrl.itemCopy[index];
      console.log("the changes were Canceled!");
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
  }]);