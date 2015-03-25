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
    $scope.average = 0;
    $scope.minimum = 0;
    $scope.maximum = 0;
    $scope.records = [];

    $scope.$watch('records.length', function(){
        $scope.calculateStatistics($scope.records);
    });

    $scope.addRecord = function (studentName, grade) {
        var newRecord = {
            name: studentName,
            grade: grade
        };
        $scope.records.push(newRecord);
        $scope.grade = '';
        $scope.studentName = '';
        angular.element('#studentName').focus();
    };

    $scope.deleteRecord = function (index) {
        $scope.records.splice(index, 1);
    };

    $scope.calculateStatistics = function() {
        $scope.average = $scope.calculateAverage($scope.records);
        $scope.minimum = $scope.calculateMinimum($scope.records);
        $scope.maximum = $scope.calculateMaximum($scope.records);
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

    $scope.calculateMinimum = function(MyData){
        var min = 99999999;
        for(var i = 0; i < MyData.length; i++){
            if (MyData[i].grade < min) {
                min = MyData[i].grade;
            }
        }
        if (min === 99999999) {
            min = 0;
        }
        return min;
    };

    $scope.calculateMaximum = function(MyData){
        var max = 0;
        for(var i = 0; i < MyData.length; i++){
            if (MyData[i].grade > max) {
                max = MyData[i].grade;
            }
        }
        return max;
    };

  });
