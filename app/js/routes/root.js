angular.module('app.routes').config([
  '$routeProvider',
function ($routeProvider) {
  'use strict';

  $routeProvider.when('/', {
    templateUrl: 'views/user.html'
  });

}]);
