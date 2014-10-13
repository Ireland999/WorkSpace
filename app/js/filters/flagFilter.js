angular.module('app.filters').filter('flagFilter',function(){
	'use strict';
	return function(flag) {
		return flag === 1 ? '离职':'在职';
	};
});
