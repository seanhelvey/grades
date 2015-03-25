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

  it('should calculate statistics correctly with empty list', function () {
    expect(scope.records.length).toBe(0);
    expect(scope.average).toBe(0);
    expect(scope.minimum).toBe(0);
    expect(scope.maximum).toBe(0);
  });

  it('should calculate statistics correctly after adding and removing 1 record', function () {
    scope.addRecord('james',10);
    scope.deleteRecord(0);
    scope.$digest();
    expect(scope.records.length).toBe(0);
    expect(scope.average).toBe(0);
    expect(scope.minimum).toBe(0);
    expect(scope.maximum).toBe(0);
  });

  it('should calculate statistics correctly after adding 3 records', function () {
    scope.addRecord('james',10);
    scope.addRecord('karen',20);
    scope.addRecord('jimmy',30);
    scope.$digest();
    expect(scope.records.length).toBe(3);
    expect(scope.average).toBe(20);
    expect(scope.minimum).toBe(10);
    expect(scope.maximum).toBe(30);
  });

  it('should calculate statistics correctly after adding 3 records and removing 1', function () {
    scope.addRecord('james',10);
    scope.addRecord('karen',20);
    scope.addRecord('jimmy',30);
    scope.deleteRecord(0);
    scope.$digest();
    expect(scope.records.length).toBe(2);
    expect(scope.average).toBe(25);
    expect(scope.minimum).toBe(20);
    expect(scope.maximum).toBe(30);
  });

  it('should calculate statistics correctly after adding a score of 0', function () {
    scope.addRecord('jimmy',0);
    scope.$digest();
    expect(scope.records.length).toBe(1);
    expect(scope.average).toBe(0);
    expect(scope.minimum).toBe(0);
    expect(scope.maximum).toBe(0);
  });

  it('should calculate statistics correctly after adding 3 records including a score of 0', function () {
    scope.addRecord('james',10);
    scope.addRecord('karen',20);
    scope.addRecord('jimmy',0);
    scope.$digest();
    expect(scope.records.length).toBe(3);
    expect(scope.average).toBe(10);
    expect(scope.minimum).toBe(0);
    expect(scope.maximum).toBe(20);
  });

  it('should calculate statistics correctly after adding 3 records and removing all of them', function () {
    scope.addRecord('james',10);
    scope.addRecord('karen',20);
    scope.addRecord('jimmy',0);
    scope.deleteRecord(0);
    scope.deleteRecord(0);
    scope.deleteRecord(0);
    scope.$digest();
    expect(scope.records.length).toBe(0);
    expect(scope.average).toBe(0);
    expect(scope.minimum).toBe(0);
    expect(scope.maximum).toBe(0);
  });

});
