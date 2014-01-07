'use strict';

require('angular/angular');
require('angular-route/angular-route');
var controllers = require('./controllers');

var trybbs = angular.module('trybbs', ['ngRoute']);

trybbs.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: './views/home.html',
      controller: 'HomeCtrl'
    }).when('/secrets', {
      templateUrl: './views/secrets.html',
      controller: 'SecretsCtrl'
    }).otherwise({redirectTo: '/'});
  }
]);
console.dir(controllers.HomeCtrl);
trybbs.controller('HomeCtrl', ['$scope', controllers.HomeCtrl]);
trybbs.controller('SecretsCtrl', ['$scope', controllers.SecretsCtrl]);


