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
    'ngTouch',
    'ui.bootstrap'
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
  })
  .directive('timepicker', function ($parse) {
    return {
      restrict: "E",
      replace: true,
      transclude: false,
      compile: function (element, attrs) {

        var modelAccessor = $parse(attrs.ngModel);

        var html = "<div class='input-append'><input ng-model='" + attrs.ngModel + "' ng-change='" + attrs.ngChange + "' data-format='hh:mm:ss' type='text' class='form-control col-xs-10' placeholder='hh:mm:ss' style='width:80%;'></input><span class='add-on col-xs-2 text-center'><i data-time-icon='glyphicon glyphicon-time' data-date-icon='glyphicon glyphicon-calendar'></i></span></div>";

        var newElem = $(html);
        element.replaceWith(newElem);

        return function (scope, element, attrs, controller) {

          var processChange = function () {
            var time = $(attrs.id).val();

            scope.$apply(function (scope) {
              // Change bound variable
              modelAccessor.assign(scope, time);
            });
          };

          element.datetimepicker({
            pickDate: false
          });

          scope.$watch(modelAccessor, function (val) {
            var time = $(attrs.id).val();
            $(attrs.id).val();
          });

        };

      }
    };
  }).directive('datepicker', function ($parse) {
    return {
      restrict: "E",
      replace: true,
      transclude: false,
      compile: function (element, attrs) {

        var modelAccessor = $parse(attrs.ngModel);

        var html = "<div input-append date'><input ng-model='" + attrs.ngModel + "' ng-change='" + attrs.ngChange + "' data-format='yyyy-MM-dd' type='text' class='form-control col-xs-10' placeholder='yyyy-MM-dd' style='width:80%;'><span class='add-on col-xs-2 text-center'><i data-time-icon='glyphicon glyphicon-time' data-date-icon='glyphicon glyphicon-calendar'></i></span></div>";

        var newElem = $(html);
        element.replaceWith(newElem);

        return function (scope, element, attrs, controller) {



          element.datetimepicker({
            pickTime: false
          });

          element.on('changeDate', function (e) {

            var modifiedDate = moment(e.date).subtract(1, 'days');
            console.log(modifiedDate.format("YYYY-MM-DD"));
            scope.$apply(function (scope) {
              // Change bound variable
              modelAccessor.assign(scope, modifiedDate.format("YYYY-MM-DD"));
            });
          });

          var picker = element.data('datetimepicker');

          var date = moment(scope.$eval(modelAccessor), "YYYY-MM-DD").add(1, 'days');

          picker.setDate(date);

          console.log(date);

          scope.$watch(modelAccessor, function (val) {
              var save = $parse(attrs.ngChange);
          });

        };

      }
    };
  });

