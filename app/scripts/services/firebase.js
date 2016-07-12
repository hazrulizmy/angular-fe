'use strict';

/**
 * @ngdoc service
 * @name timeLogApp.firebase
 * @description
 * # firebase
 * Factory in the timeLogApp.
 */
angular.module('timeLogApp').service('firebase', ['$http', function ($http) {

  this.getAllRecords = function () {
    // return a Promise object so that the caller can handle success/failure
    return $http({ method: 'GET', url: 'https://time-log.firebaseio.com/record.json' });
  }

  this.saveRecord = function (record) {
    // return a Promise object so that the caller can handle success/failure
    var resourceUrl = "https://time-log.firebaseio.com/record/" + record.id + ".json";
    return $http({ method: 'PUT', url: resourceUrl, data: record });
  }

  this.updateRecord = function (record) {
    // return a Promise object so that the caller can handle success/failure
    console.log(record);
    var resourceUrl = "https://time-log.firebaseio.com/record/" + record.id + ".json";
    return $http({ method: 'PATCH', url: resourceUrl });
  }

  this.deleteRecord = function (record) {
    // return a Promise object so that the caller can handle success/failure
    console.log(record);
    var resourceUrl = "https://time-log.firebaseio.com/record/" + record.id + ".json";
    return $http({ method: 'DELETE', url: resourceUrl });
  }

}]);