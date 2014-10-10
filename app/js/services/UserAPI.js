angular.module('app.services').factory('UserAPI', [
	'$http',
	'$q',
	'config',
function ($http, $q, config) {
	return {
		add: function (UserVO) {
			var defer = $q.defer();
			$http.post(config.host+'/api/user', UserVO).success(function(result){
				defer.resolve(result);
			}).error(function(result){
				defer.reject(result);
			});
			return defer.promise;
		},

		resign: function (json) {
			var defer = $q.defer();
			$http.post(config.host+'/api/user/resign', json).success(function(result){
				defer.resolve(result);
			}).error(function(result){
				defer.reject(result);
			});
			return defer.promise;
		},
		load: function(){

			var defer = $q.defer();
			$http.get(config.host+'/api/user').success(function(result){

				defer.resolve(result);
			});

			return defer.promise;
		}
	};
}]);