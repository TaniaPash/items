angular.module('rechi')
.controller ('ListController', function ($scope, $http){
  this.items = [];
    
  $http({
        method: 'GET',
        url: 'http://rechi.herokuapp.com/items'
      }).then(function successCallback(response) {
        items = response;            
            console.log (items);
        }, function errorCallback(response) {
          console.log("Error");
        });
        
});