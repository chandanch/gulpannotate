'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }]);

app.controller('View1Controller', ["$scope", "$localStorage", function ($scope, $localStorage) {
    $scope.name = 'dd';
    $localStorage.set('d',$scope.name);
}]);
'use strict';
TestCtrl.$inject = ["$scope", "$log"];
function TestCtrl($scope, $log) {
    $scope.$watch('random-event', function() {
        $log.log('hello world');
    });
}
angular.module('test').controller('TestCtrl', TestCtrl);