'use strict';

/**
 * @ngdoc function
 * @name timeLogApp.controller:TimeLogCtrl
 * @description
 * # TimeLogCtrl
 * Controller of the timeLogApp
 */
angular.module('timeLogApp')
  .controller('TimeLogCtrl', ['$scope', 'firebase', function($scope, firebase) {
    $scope.records = firebase.get();
}]);
