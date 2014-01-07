'use strict';

var controllers = require('../app/js/controllers');

describe('HomeCtrl', function() {
  var scope;
  var ctrl;

  beforeEach(function() {
    scope = {};
    ctrl = new controllers.HomeCtrl(scope);
  });

  it('has a message scope variable', function() {
    expect(scope.message).toBe('home');
  });
});

describe('SecretsCtrl', function() {
  var scope;
  var ctrl;

  beforeEach(function() {
    scope = {};
    ctrl = new controllers.SecretsCtrl(scope);
  });

  it('has a message scope variable', function() {
    expect(scope.message).toBe('trybbs for keeping secrets');
  });
});
