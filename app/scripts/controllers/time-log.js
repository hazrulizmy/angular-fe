'use strict';

/**
 * @ngdoc function
 * @name timeLogApp.controller:TimeLogCtrl
 * @description
 * # TimeLogCtrl
 * Controller of the timeLogApp
 */
angular.module('timeLogApp')
  .controller('TimeLogCtrl', ['$scope', 'firebase', function ($scope, firebase) {

    $scope.records = {};

    firebase.getAllRecords().success(function (data) {
      $scope.records = data;
    }).error(function () {
      alert('unable to pull time logs!!!');
    });

    $scope.saveRecord = function (record) {
      firebase.saveRecord(record).success(function () {
        alert('saved successfully!!!');
      }).error(function () {
        alert('something went wrong!!!');
      });
    };


  }]);
