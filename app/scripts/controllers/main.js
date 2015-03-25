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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
