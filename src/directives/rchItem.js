angular.module('rechi')
    .component('rchItem', {
            templateUrl: 'pages/list/rch-item.html',
            bindings: {
               item:'=',
               $ctrl: '=',
               $index: '='
             }
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
