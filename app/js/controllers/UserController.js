angular.module('app.controllers').controller('UserController',[
  '$http',
	'$scope',
	'UserAPI',
  'FileUploader',
  'config',
function ($http, $scope, UserAPI, FileUploader, config) {
  'use strict';

  var uploader = new FileUploader({
    url: config.uploadPath
  });

  var upload = function (username) {
    uploader.getNotUploadedItems().forEach(function (fileitem) {
      fileitem.formData = [{
        username: username
      }];
      fileitem.upload();
    });
  };

  uploader.onCompleteItem = function (fileItem, result) {
    console.log(result);
    $scope.message = result.retmsg;
  };

  var getUploadLimit = function () {
    UserAPI.uploadLimit().then(function (result) {
      console.log(result);
      $scope.limitTypes = result.type;
      $scope.size = result.size;
      $scope.name = result.name;
    }, function (result) {
      alert(result.message);
    });
  };

	var save = function () {
		UserAPI.add($scope.UserVO).then(function (result) {
			$scope.vos.push({
				userid:result.id,
				username:$scope.UserVO.username,
				flag: Number($scope.UserVO.flag)
			});
			console.log(result);

		},function (result) {
			alert(result.message);
		});

	};

	var resign = function(vo){
		//控制层内部操作
		vo.flag = 1;
		//调用服务层接口
		UserAPI.resign({id: vo.userid}).then(function () {
			//调用服务层接口成功，后续操作

		},function (result) {
			//调用服务层接口失败，回滚操作
			vo.flag = 0;
			alert(JSON.stringify(result, null, 2));
		});
	};

	var load = function(){
		UserAPI.load().then(function(result){

			$scope.vos = result.map(function (data) {
				return {
					username: data.username,
					flag: data.flag,
					userid: data.userid
				};
			});
		});

	};

  $scope.getUploadLimit = getUploadLimit;
  $scope.upload = upload;
  $scope.uploader = uploader;
	$scope.save = save;
	$scope.resign = resign;
	load();
}]);
