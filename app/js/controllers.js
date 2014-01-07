'use strict';

exports.HomeCtrl = function($scope) {
  $scope.message = 'home';
  console.log('controller 1');
};

exports.SecretsCtrl = function($scope) {
  $scope.message = 'trybbs for keeping secrets';
  console.log('controller 2');
};
