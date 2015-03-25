'use strict';

/**
 * @ngdoc overview
 * @name gradesApp
 * @description
 * # gradesApp
 *
 * Main module of the application.
 */
angular
  .module('gradesApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
