angular.module('rechi')
    .directive('rchItem', function () {
        return {
            restrict: 'E',
            // controller: 'ListController',
            // controllerAs: '$ctrl',
            scope: {
               item: '=',
               $ctrl: '=',
               $index: '='
            },
            templateUrl: 'pages/list/rch-item.html'
            // to create isolate scope
        }
    });