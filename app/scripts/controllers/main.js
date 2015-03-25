'use strict';

/**
 * @ngdoc function
 * @name gradesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gradesApp
 */
angular.module('gradesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.studentName = '';
    $scope.grade = '';
    $scope.records = [];

    $scope.addRecord = function () {
        var newRecord = {
            name: $scope.studentName,
            grade: $scope.grade,
        };
        $scope.records.push(newRecord);
    };

    $scope.deleteRecord = function (index) {
        $scope.records.splice(index, 1);
    };

    $scope.calculateAverage = function(MyData){
        var sum = 0;
        var avg = 0;
        for(var i = 0; i < MyData.length; i++){
            sum += parseInt(MyData[i].grade, 10);
            avg = sum/MyData.length;
        }
        return avg;
    };

  });
