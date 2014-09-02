angular.module('app.controllers').controller('UserController',[
    '$http', 
	'$scope',
	'UserAPI',
function ($http, $scope, UserAPI) {

	var save = function () {
		UserAPI.add($scope.UserVO).then(function (result) {
			$scope.vos.push({userid:result.id,username:$scope.UserVO.username});
			console.log(result);
		}).catch(function (result) {
			alert(result.message);
		});
		
	};

	var resign = function(vo){
		UserAPI.resign({id: vo.userid}).then(function (result) {
			$scope.vos.splice($scope.vos.indexOf(vo),1);
			console.log(result);
		}).catch(function (result) {
			alert(result.message);
		});
	};

	$scope.save=save;
	$scope.resign=resign;
}]);