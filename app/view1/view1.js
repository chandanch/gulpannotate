'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }]);

app.controller('View1Controller', function ($scope, $localStorage) {
    $scope.name = 'dd';
    $localStorage.set('d',$scope.name);
});