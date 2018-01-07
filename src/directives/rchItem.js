angular.module('rechi')
   // .controller('RechiItemController', ['$http', function ($http) {
     //   var $ctrl = this;
      //  $ctrl.delete = function ($index) {
        //    $ctrl.onDelete($index);
    //    };
       // console.log ("A", $ctrl);
   // }])

    .component('rchItem', {
        templateUrl: 'pages/list/rch-item.html',
      //  controller: "RechiItemController",
        bindings: {
            item: '<',
            itemCopy:'<',
            index: '<',
            onDelete: '&',
            onUpdate: '&',
            onEdit:'&',
            onCancel:'&',
            
        },
    });

    // .directive('rchItem', function () {
    //     return {
    //         restrict: 'E',
    //         // controller: 'ListController',
    //         // controllerAs: '$ctrl',
    //         scope: {
    //            item: '=',
    //            $ctrl: '=',
    //            $index: '='
    //         },
    //         templateUrl: 'pages/list/rch-item.html'
    //         // to create isolate scope
    //     }
    // });
