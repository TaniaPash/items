angular.module('rechi')
    .service('GetItemService', function ($http) {
        // var service = {};
        this.getItems = function () {
            return $http.get('https://rechi.herokuapp.com/items', {});
        }
        // return service;
this.addItem = function (newItem) {
   return $http.post('https://rechi.herokuapp.com/items', newItem)
    // .then(function successCallback(response) {
    //     $ctrl.data.push(response.data);
    //     // $uibModalInstance.close('save');
    //     console.log(response);
    //     $ctrl.newItem = {
    //         name: " ",
    //         description: " ",
    //         imageUrl: "",
    //     };
    // }, function errorCallback(response) { console.log("Error2", response) });
}
 

    });