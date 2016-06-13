'use strict';

describe('Controller: TimeLogCtrl', function () {

  // load the controller's module
  beforeEach(module('timeLogApp'));

  var TimeLogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeLogCtrl = $controller('TimeLogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimeLogCtrl.awesomeThings.length).toBe(3);
  });
});
