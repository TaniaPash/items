angular.module('rechi')
  .controller('ListController', function ($http) {
    var $ctrl = this;
    $ctrl.newItem = {
      name: " ",
      description: " "
    };

    console.log($ctrl.newItem);

    $http.get('https://rechi.herokuapp.com/items')
      .then(function successCallback(response) {
        $ctrl.data = response.data;
      }, function errorCallback(response) {
        console.log('Error during GET /items', response);
      });

    console.log('List Controller', $ctrl);
    
    $ctrl.saveItem = function () {
      $http.post('https://rechi.herokuapp.com/items', $ctrl.newItem)
        .then(function successCallback(response) {
          $ctrl.data.push(response.data);
          $ctrl.newItem = {}
        }, function errorCallback(response) { console.log("Error2", response) })
    };
  });