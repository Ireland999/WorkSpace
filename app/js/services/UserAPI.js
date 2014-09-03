angular.module('app.services').factory('UserAPI', [
	'$http',
	'$q',
function ($http, $q) {
	return {
		add: function (UserVO) {
			var defer = $q.defer();
			$http.post('//localhost:8080/api/user', UserVO).success(function(result){
				defer.resolve(result);
			}).error(function(result){
				defer.reject(result);
			});
			return defer.promise;
		},

		resign: function (json) {
			var defer = $q.defer();
			$http.post('//localhost:8080/api/user/resign', json).success(function(result){
				defer.resolve(result);
			}).error(function(result){
				defer.reject(result);
			});
			return defer.promise;
		},
		load: function(){

			var defer = $q.defer();
			$http.get('//localhost:8080/api/user').success(function(result){

				defer.resolve(result);
			});

			return defer.promise;
		}
	};
}]);