'use strict';

/**
 * @ngdoc overview
 * @name testdirApp
 * @description
 * # testdirApp
 *
 * Main module of the application.
 */
angular
  .module('testdirApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      .when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'Hello',
        controllerAs: 'hel'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
