angular.module('rechi')
    .service('GetItemService', GetItemService)
     /*@ngInject*/
    function GetItemService($http) {
        this.getItems = function () {
            return $http.get('https://rechi.herokuapp.com/items', {});
        }
        this.addItem = function (newItem) {
            return $http.post('https://rechi.herokuapp.com/items', newItem)
        }
    };