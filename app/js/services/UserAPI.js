angular.module('app.services').factory('UserAPI', [
	'$http',
	'$q',
	'config',
	'env',
function ($http, $q, config, env) {
	'use strict';

	console.log(env);

	return {
		add: function (UserVO) {
			var defer = $q.defer();
			$http.post(config.userApi, UserVO).success(function(result){
				defer.resolve(result);
			}).error(function(result){
				defer.reject(result);
			});
			return defer.promise;
		},

		resign: function (json) {
			var defer = $q.defer();
			$http.post(config.userResign, json).success(function(result){
				defer.resolve(result);
			}).error(function(result){
				defer.reject(result);
			});
			return defer.promise;
		},

		load: function (){
			var defer = $q.defer();
			$http.get(config.userApi).success(defer.resolve).error(defer.reject);
			return defer.promise;
		},

		uploadLimit: function () {
			var defer = $q.defer();
			$http.get(config.uploadPath).success(function (result) {
				if (!result.status) {
					defer.reject({
						message: result.retmsg
					});
					return;
				}

				var type = result.retmsg.filetype;
				var typeArray = type.split(';');

				defer.resolve({
					type: typeArray,
					size: result.retmsg.maxsize,
					name: result.retmsg.taskname
				});
			}).error(defer.reject);
			return defer.promise;
		}
	};
}]);
