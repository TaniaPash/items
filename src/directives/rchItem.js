angular.module('rechi')
    .directive('rchItem', function () {
        return {
            restrict: 'E',
            scope: {
                item: '='
              },
            templateUrl: 'pages/list/rch-item.html'
            // to create isolate scope
        }
    });