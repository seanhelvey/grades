'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gradesApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach an empty list of records to the scope', function () {
    expect(scope.records.length).toBe(0);
  });

  it('should add two elemets to records', function () {
    scope.addRecord({james:10});
    scope.addRecord({james:10});
    expect(scope.records.length).toBe(2);
  });

  it('should remove one element from records', function () {
    scope.deleteRecord(1);
    expect(scope.records.length).toBe(1);
  });

});
