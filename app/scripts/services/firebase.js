'use strict';

/**
 * @ngdoc service
 * @name timeLogApp.firebase
 * @description
 * # firebase
 * Factory in the timeLogApp.
 */
angular.module('timeLogApp')
  .factory('firebase', function ($resource) {
    return $resource('https://time-log.firebaseio.com/record.json');
});