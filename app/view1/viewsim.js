'use strict';
function TestCtrl($scope, $log) {
    $scope.$watch('random-event', function() {
        $log.log('hello world');
    });
}
angular.module('test').controller('TestCtrl', TestCtrl);