angular.module('app.routes').config([
  '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/user.html'
  });

  $routeProvider.when('/root', {
    templateUrl: 'views/root.html'
  });

}]);
