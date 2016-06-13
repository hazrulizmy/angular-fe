'use strict';

/**
 * @ngdoc overview
 * @name timeLogApp
 * @description
 * # timeLogApp
 *
 * Main module of the application.
 */
angular
  .module('timeLogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/time-log', {
        templateUrl: 'views/time-log.html',
        controller: 'TimeLogCtrl',
        controllerAs: 'timeLog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
