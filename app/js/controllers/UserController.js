angular.module('app.controllers').controller('UserController',[
    '$http', 
	'$scope',
	'UserAPI',
function ($http, $scope, UserAPI) {

	var save = function () {
		UserAPI.add($scope.UserVO).then(function (result) {
			$scope.vos.push({
				userid:result.id,
				username:$scope.UserVO.username,
				flag: Number($scope.UserVO.flag)
			});
			console.log(result);

		}).catch(function (result) {
			alert(result.message);
		});
		
	};

	var resign = function(vo){
		UserAPI.resign({id: vo.userid}).then(function (result) {
			//$scope.vos.splice($scope.vos.indexOf(vo),1);
			//console.log(result);
			load();
		}).catch(function (result) {
			alert(result.message);
		});
	};

	var load = function(){
		UserAPI.load().then(function(result){

			$scope.vos = result.map(function (data) {
				return {
					username: data.username,
					flag: data.flag,
					userid: data.id
				}
			});
		});

	};

	$scope.save=save;
	$scope.resign=resign;
	load();
}]);